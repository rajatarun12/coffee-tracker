import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import CoffeeForm from "./CoffeeForm";
import { Auth } from "@aws-amplify/auth";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listUsers, getUser } from "../src/graphql/queries";
import { createUser } from "../src/graphql/mutations";
import useColorScheme from "../hooks/useColorScheme";
import { Button } from "../components/Themed";
import { CreateUserInput, GetUserQueryVariables } from "../src/API";

import { View } from "../components/Themed";
import {
  List,
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
  Paragraph,
  Colors,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import CoffeeList from "./CoffeeList";
import Brewing from "./Brewing";
import { SafeAreaView } from "react-native-safe-area-context";
import { Disclaimer, MonoText } from "../components/StyledText";
import { white } from "react-native-paper/lib/typescript/src/styles/colors";

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState(Auth.user.attributes.email);
  const [userId, setUserId] = useState("");
  const [colorScheme, setColorScheme] = useState(useColorScheme());
  const [formView, setFormView] = useState(false);
  const [brewingView, setBrewingView] = useState(false);

  useEffect(() => {
    let userIdValue;
    async function handleUserLogin() {
      try {
        const user = await Auth.currentUserInfo();
        const graphqldata = await API.graphql(graphqlOperation(listUsers));

        let isUserAlreadyPresent = graphqldata.data.listUsers.items.filter(
          function (listUser: any) {
            return listUser.email === user.attributes.email;
          }
        );
        if (isUserAlreadyPresent.length > 0) {
          userIdValue = isUserAlreadyPresent[0].id;
          setUserId(userIdValue);
          setUserEmail(isUserAlreadyPresent[0].email);
        } else {
          let coffeeuser: CreateUserInput = {
            email: user.attributes.email,
            name: user.attributes.name || user.attributes.email,
          };
          let variables = {
            input: coffeeuser, // key is "input" based on the mutation above
          };
          let createdUser = await API.graphql(
            graphqlOperation(createUser, variables)
          );
          console.log(createdUser);
          userIdValue = createUser.data.createuser.id;
          setUserId(userIdValue);
          setUserEmail(createUser.data.createuser.email || "  ");
        }
        let id: GetUserQueryVariables = {
          id: userId,
        };
        let variables = {
          input: id, // key is "input" based on the mutation above
        };
        const coffeeUser = await API.graphql(graphqlOperation(getUser, id));
        console.log(coffeeUser.data);
      } catch (err) {
        console.log("error: ", err);
      }
    }
    handleUserLogin();
  }, []);

  function setView(view) {
    switch (view) {
      case "form": {
        setFormView(true);
        break;
      }
      case "brewing": {
        setBrewingView(true);
        break;
      }
      case "dashboard": {
        setFormView(false);
        setBrewingView(false);
        break;
      }
      default: {
        setFormView(false);
        setBrewingView(false);
        break;
      }
    }
  }

  function getView() {
    if (formView) {
      return (
        <View style={styles.container}>
          <CoffeeForm userIdValue={userId}></CoffeeForm>
          <View style={styles.returnButton}>
            <Button
              color="tomato"
              onPress={() => setView("dashboard")}
              children={
                <Paragraph style={{ color: Colors.white }}>
                  Return to dashboard
                </Paragraph>
              }
            ></Button>
          </View>
        </View>
      );
    } else if (brewingView) {
      return (
        <View style={styles.container}>
          <Brewing></Brewing>
          <View style={[styles.returnButton, {
    backgroundColor: colorScheme === 'dark'? Colors.black : Colors.white }]}>
            <Button
              color="tomato"
              onPress={() => setView("dashboard")}
              children={
                <Paragraph style={{ color: Colors.white }}>
                  Return to dashboard
                </Paragraph>
              }
            ></Button>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              color={Colors.deepPurple900}
              onPress={() => setView("form")}
              style={{width: "100%"}}
              children={
                <Paragraph style={{ color: Colors.white }}>
                  Record a coffee
                </Paragraph>
              }
            ></Button>
            <Button
              color="tomato"
              onPress={() => setView("brewing")}
              style={{width: "100%"}}
              children={
                <Paragraph style={{ color: Colors.white }}>
                  Start Brewing
                </Paragraph>
              }
            ></Button>
          </View>
          <ScrollView style={{ width: "90%" }}>
            <PaperProvider
              theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              {<CoffeeList userId={userId}></CoffeeList>}
            </PaperProvider>
          </ScrollView>
        </View>
      );
    }
  }
  async function handleSignOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

  return (
    <SafeAreaView
      style={colorScheme === "dark" ? styles.containerDark : styles.container}
    >
      <View style={styles.signOutContainer}>
        <MonoText style={styles.email}>{userEmail}</MonoText>
        <Button style={styles.signOut} onPress={handleSignOut}>Sign out</Button>
      </View>
      {getView()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    margin: "0%",
    justifyContent: "center",
    color: "grey",
  },
  buttonContainer: {
    paddingTop: "5%",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: 'center'
  },
  button: {
    top: 10,
  },
  email:{
    paddingRight: "2%"
  },
  returnButton: {
    alignItems: "center",
    width: "100%",
    paddingBottom: "10%"
  },
  signOutContainer:{
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    width: "100%",
    paddingHorizontal: "5%",
    paddingVertical: "2%"
  },
  signOut:{
    alignSelf: "flex-end"
  }

});
