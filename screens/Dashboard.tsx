import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import  CoffeeForm  from './CoffeeForm';
import { Auth } from '@aws-amplify/auth';
import API, { graphqlOperation } from '@aws-amplify/api'
import { listUsers, getUser, getCoffeeTracker, listCoffeeTrackers } from '../src/graphql/queries';
import { createUser, deleteCoffeeTracker } from '../src/graphql/mutations';
import useColorScheme from '../hooks/useColorScheme';
import {Button} from '../components/Themed';
import { CreateUserInput, GetUserQueryVariables, ModelCoffeeTrackerFilterInput, ModelIDInput, ListCoffeeTrackersQuery, DeleteCoffeeTrackerInputs, DeleteCoffeeTrackerInput } from '../src/API';

import { Text, View } from '../components/Themed';
import { List, Provider as PaperProvider, DefaultTheme, DarkTheme, IconButton, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState(0);
  const [userId, setUserId] = useState("");
  const [colorScheme, setColorScheme] = useState(useColorScheme())
  const [formView, setFormView] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [coffeeTrackers, setCoffeeTrackers] = useState<ListCoffeeTrackersQuery>();
  async function handleCoffeeTrackers(){
    let userIdType: ModelIDInput = {
      eq: userId
    };
    let coffeeInput: ModelCoffeeTrackerFilterInput = {
      userID: userIdType
    };
    try {
      const coffeeTrackersResult =  await API.graphql(graphqlOperation(listCoffeeTrackers, { filter: coffeeInput}));
      const coffeeTrackersResultData: ListCoffeeTrackersQuery = coffeeTrackersResult.data;
      setCoffeeTrackers(coffeeTrackersResultData);
    } catch(error){
      console.log('error: ', error)
    }
  } 
  useEffect(() => {
    let userIdValue;
    async function handleUserLogin() {
      try {
        const user = await Auth.currentUserInfo();
        const graphqldata = await API.graphql(graphqlOperation(listUsers))

        let isUserAlreadyPresent = graphqldata.data.listUsers.items.filter(function (listUser: any) { return listUser.email === user.attributes.email });
        if (isUserAlreadyPresent.length > 0) {
          userIdValue = isUserAlreadyPresent[0].id;
          setUserId(userIdValue);
          setUserEmail(isUserAlreadyPresent[0].email);
        } else {
          let coffeeuser: CreateUserInput = {
            email: user.attributes.email,
            name: user.attributes.name || user.attributes.email
          };
          let variables = {
            input: coffeeuser, // key is "input" based on the mutation above
          };
          let createdUser = await API.graphql(graphqlOperation(createUser, variables));
          console.log(createdUser);
          userIdValue = createUser.data.createuser.id;
          setUserId(userIdValue);
          setUserEmail(createUser.data.createuser.email || '  ')
        }
        let id: GetUserQueryVariables = {
          id: userId
        };
        let variables = {
          input: id, // key is "input" based on the mutation above
        };
        const coffeeUser = await API.graphql(graphqlOperation(getUser, id));
        console.log(coffeeUser.data)
      } catch (err) {
        console.log('error: ', err)
      }
    }
    handleUserLogin().then(function(){
      handleCoffeeTrackers();
    });
  }, []);

 async function _deleteItem(id:string){
    let coffeeTrackerInput: DeleteCoffeeTrackerInput = {
        id: id
    };
    try {
        await API.graphql(graphqlOperation(deleteCoffeeTracker, {input: coffeeTrackerInput}));
        handleCoffeeTrackers();
    } catch(error){
      console.log('error: ', error)
    }
  }

  const _handlePress = function(){
    setExpanded(!expanded);
  } 

  function getCoffeeTrackers(){
    var items = [];
    var parameters = ["locationName",
    "Overall",
    "Comments",
    "Family",
    "Notes",
    "Origin",
    "Aroma",
    "Flavor",
    "Acidity",
    "Body",
    "Balance",
    "BrewType",
    "Temperature",
    "WTOCRatio",
    "BrewTime"
    ];
    function coffeeItems(item) {
      var coffeeItemList = [];
      parameters.forEach((param) => {
        if(item[param]){
          coffeeItemList.push(<List.Item title={param+": "+item[param]} style={{paddingStart: '10%'}} />)
        }
      })
      return coffeeItemList;
    }
    if(coffeeTrackers && coffeeTrackers.listCoffeeTrackers && coffeeTrackers.listCoffeeTrackers.items){
      coffeeTrackers?.listCoffeeTrackers?.items.forEach((item:any) => {
          items.push(
          <List.Accordion
            title={item.coffeeName + " - " + item.locationName}>
            <IconButton
              icon="delete"
              color={Colors.red500}
              size={20}
              style={{alignSelf: 'flex-end'}}
              onPress={() => _deleteItem(item.id)}
            />
            {coffeeItems(item)}
          </List.Accordion>
        )
      });
    } else {
      items.push(<Text>No Data</Text>)
    }
    return (<List.Section title="Your Coffee's" style={{backgroundColor: 'transparent', marginTop:50}}>{items}</List.Section>);
  }

  function getView() {
      handleCoffeeTrackers();
      if(formView){
        return(
          <View style={styles.container}>
          <CoffeeForm userIdValue = {userId}></CoffeeForm>
          <View style={styles.button}>
          <Button onPress={() => setFormView(false)} children=" Return to dashboard"></Button>
          </View>
          </View>
        )
      } else {
        return(
        <View style={styles.container}>
          <View style={styles.button}>
          <Button onPress={() => setFormView(true)} children="Record a coffee"></Button>
          </View>
          <ScrollView style={{width: '90%'}}>
          <PaperProvider theme={colorScheme ==='dark'? DarkTheme: DefaultTheme }>
            {getCoffeeTrackers()}
            </PaperProvider>
          </ScrollView>
        </View>)
      }
  }

  return (
    <View style={colorScheme === 'dark' ? styles.containerDark : styles.container}>
    {getView()}
    </View>)
};

const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    color: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    color: 'grey'
  },
  button: {
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%'
  },
  title: {
    fontSize: 13
  }
});
