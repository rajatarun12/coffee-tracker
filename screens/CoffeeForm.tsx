import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { View, TextInput, Button } from "../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import useColorScheme from "../hooks/useColorScheme";
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
  Colors,
  Divider,
} from "react-native-paper";

import API, { graphqlOperation } from "@aws-amplify/api";
import { createCoffeeTracker } from "../src/graphql/mutations";
import { CreateCoffeeTrackerInput } from "../src/API";
import { MonoText as Text, Paragraph } from "../components/StyledText";

export default function CoffeeForm(props) {
  const [location, setLocation] = useState("");
  const [colorScheme, setColorScheme] = useState(useColorScheme());
  const [coffeeName, setCoffeeName] = useState("");
  const [family, setFamily] = useState("");
  const [notes, setNotes] = useState("");
  const [origin, setOrigin] = useState("");
  const [comments, setComments] = useState("");
  const [aroma, setAroma] = useState(0);
  const [isAdvanceClicked, setIsAdvancedClicked] = useState(false);
  const [flavor, setFlavor] = useState(0);
  const [acidity, setAcidity] = useState(0);
  const [body, setBody] = useState(0);
  const [balance, setBalance] = useState(0);
  const [overall, setOverall] = useState(0);
  const [status, setStatus] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function getRandomNumber() {
    const min = 1;
    const max = 100000000;
    const rand = min + Math.random() * (max - min);
    return rand;
  }
  async function saveData() {
    let coffeeTrackerInput: CreateCoffeeTrackerInput = {
      id: getRandomNumber().toString().replace(".", ""),
      userID: props.userIdValue,
      locationName: location,
      coffeeName: coffeeName,
      Family: family,
      Notes: notes,
      Origin: origin,
      Comments: comments,
      Aroma: Math.round(aroma),
      Flavor: Math.round(flavor),
      Acidity: Math.round(acidity),
      Body: Math.round(body),
      Balance: Math.round(balance),
      Overall: Math.round(overall),
    };

    let variable = {
      input: coffeeTrackerInput,
    };
    try {
      setIsFormSubmitted(true);
      setStatus(false);
      const coffeeTracker = await API.graphql(
        graphqlOperation(createCoffeeTracker, variable)
      );
      setStatus(true);
      console.log(coffeeTracker);
    } catch (error) {
      setIsFormSubmitted(false);
      console.log(error);
    }
  }

  function saveCoffeeData() {
    saveData();
  }
  function handleAdvancedToggle() {
    setIsAdvancedClicked(!isAdvanceClicked);
  }
  function handleAdvanced() {
    if (isAdvanceClicked) {
      return (
        <View>
          <TextInput
            style={styles.input}
            nativeID="Family"
            placeholder="Family"
            value={family}
            onChangeText={(value) => setFamily(value)}
          ></TextInput>
          <TextInput
            style={styles.input}
            nativeID="Notes"
            placeholder="Notes"
            value={notes}
            onChangeText={(value) => setNotes(value)}
          ></TextInput>
          <TextInput
            style={styles.input}
            nativeID="Origin"
            placeholder="Origin"
            value={origin}
            onChangeText={(value) => setOrigin(value)}
          ></TextInput>
          <View style={styles.input}>
            <Text>Aroma</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={aroma}
              onSlidingComplete={(value) => setAroma(value)}
            />
          </View>
          <View style={styles.input}>
            <Text>Flavor</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={flavor}
              onSlidingComplete={(value) => setFlavor(value)}
            />
          </View>
          <View style={styles.input}>
            <Text>Acidity</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={acidity}
              onSlidingComplete={(value) => setAcidity(value)}
            />
          </View>
          <View style={styles.input}>
            <Text>Body</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={body}
              onSlidingComplete={(value) => setBody(value)}
            />
          </View>
          <View style={styles.input}>
            <Text>Balance</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={balance}
              onSlidingComplete={(value) => setBalance(value)}
            />
          </View>
          <Divider/>
          <Button
          style={{marginVertical: '2%'}}
            onPress={saveCoffeeData}
            disabled={!coffeeName || !location}
            children="Save"
          ></Button>
        </View>
      );
    } else {
      return (
        <View style={styles.advancedButton}>
          <Button
            style={{flex: 0.5 , backgroundColor: 'tomato', borderRadius: 50}}
            onPress={handleAdvancedToggle}
            mode= "outlined"
            children={
              <Paragraph>Advanced</Paragraph>
            }
          ></Button>
          <Button
          style={{flex: 0.5}}
            onPress={saveCoffeeData}
            disabled={!coffeeName || !location}
            children={<Paragraph>Save</Paragraph>}
          ></Button>
        </View>
      );
    }
  }
  function handleForm() {
    if (isFormSubmitted && status) {
      return <Text>SUCCESS</Text>;
    } else if (!isFormSubmitted) {
      return (
        <ScrollView
          style={styles.formContainer}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.form}>
            <PaperProvider
              theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <TextInput
                style={styles.firstInput}
                nativeID="Location"
                placeholder="Location"
                value={location}
                onChangeText={(value) => setLocation(value)}
              ></TextInput>
              <TextInput
                style={styles.input}
                nativeID="Coffee Name"
                placeholder="Coffee Name"
                value={coffeeName}
                onChangeText={(value) => setCoffeeName(value)}
              ></TextInput>
              <View style={styles.input}>
                <Text>Rating</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  value={overall}
                  onSlidingComplete={(value) => setOverall(value)}
                />
              </View>
              <View style={styles.input}>
              <Text>Comments</Text>
              <TextInput
                style={styles.inputTextArea}
                multiline={true}
                numberOfLines={4}
                nativeID="Comments"
                placeholder="Comments"
                value={comments}
                onChangeText={(value) => setComments(value)}
              ></TextInput>
              </View>
              <View style={{width: "100%"}}>
              {handleAdvanced()}
              </View>
            </PaperProvider>
          </View>
        </ScrollView>
      );
    } else {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
  }
  return handleForm();
}
const styles = StyleSheet.create({
  input: {
    padding: "5%",
    borderBottomColor: Colors.grey300,
    borderBottomWidth: 1,
  },
  firstInput: {
    padding: "5%",
    borderBottomColor: Colors.grey300,
    borderBottomWidth: 1,
    marginTop: "8%",
  },
  formContainer: {
    width: "100%",
  },
  advancedButton: {
    marginBottom: "10%",
    marginTop: "10%",
    width: "100%",
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  form: {
    width: "80%",
    marginBottom: "10%",
  },
  inputTextArea: {
      color: Colors.white,
    padding: "5%",
    marginTop: "10%",
    borderBottomColor: Colors.grey300,
    borderBottomWidth: 1,
    textAlignVertical: "top",
  },
  slider: { width: "100%", height: 40 },
});
