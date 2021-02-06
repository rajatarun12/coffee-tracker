import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View, Image, TextInput, Button } from "../components/Themed";
import { Divider, Colors } from "react-native-paper";
import {
  Header,
  SubHeader,
  Paragraph,
  Disclaimer,
} from "../components/StyledText";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";
import BrewStep from "./BrewStep";
import coffeeGrind, { FRENCH_PRESS, CHEMEX, POUR_OVER } from "../constants/CoffeeTypes";

export default function Brewing() {
  const PREPARATION = "preparation";
  const BREW = "brew";

  const [step, setStep] = React.useState(PREPARATION);
  const [brewType, setBrewType] = React.useState(POUR_OVER);
  const [waterWeight, setWaterWeight] = React.useState(0);
  const [coffeeWeight, setCoffeeWeight] = React.useState(0);

  function preperation() {
    return (
      <View>
        <Header key="PreperationHeader" style={styles.subtitle}>
          Preparation
        </Header>
        <View key="WeightContainer" style={styles.weightContainer}>
          <Paragraph
            key="BrewingContainer"
            style={styles.weightContainerheader}
          >
            Coffee - Water Ratio calculator
          </Paragraph>
          <Disclaimer> * Approx 1 Tablespoon = 5gms of coffee</Disclaimer>
          <View style={styles.waterCalculator}>
            <Paragraph style={styles.coffeeWeight}>Coffee Weight (g)</Paragraph>
            <Paragraph style={styles.waterWeight}>Water (ml)</Paragraph>
          </View>
          <View style={styles.waterCalculator}>
            <TextInput
              key="CoffeeWeight"
              style={styles.coffeeWeight}
              nativeID="CoffeeWeight"
              placeholder="Coffee Weight"
              value={coffeeWeight}
              onChangeText={(value: string) => {
                setWaterWeight(Number(value) * 16);
                setCoffeeWeight(Number(value));
              }}
            ></TextInput>
            <Paragraph style={styles.waterWeight}>{waterWeight}</Paragraph>
          </View>
        </View>
        <Divider />
        <View style={styles.brewFormContainer}>
          <SubHeader style={styles.brewMethodheader}>
            Select Brew method
          </SubHeader>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                setBrewType(CHEMEX);
              }}
            >
              <Image
                source={require("../assets/icons/chemex.png")}
                style={styles.icon}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBrewType(FRENCH_PRESS);
              }} style={styles.iconButton}
            >
              <Image
                source={require("../assets/icons/frenchpress.png")}
                style={styles.icon}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBrewType(POUR_OVER);
              }}
            >
              <Image
                source={require("../assets/icons/pourover.png")}
                style={styles.icon}
              ></Image>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.grind}>
              <Paragraph style={styles.paragraph}>Brew Type : </Paragraph>
              <Paragraph style={styles.paragraph}>{brewType}</Paragraph>
            </View>
            <View style={styles.grind}>
              <Paragraph style={styles.paragraph}>Grind : </Paragraph>
              <Paragraph style={styles.paragraph}>
                {coffeeGrind &&
                  coffeeGrind[brewType] &&
                  coffeeGrind[brewType]["grind"]}
              </Paragraph>
            </View>
            <View style={styles.grind}>
              <Paragraph style={styles.paragraph}>Temperature : </Paragraph>
              <Paragraph style={styles.paragraph}>
                {coffeeGrind &&
                  coffeeGrind[brewType] &&
                  coffeeGrind[brewType]["temp"]}
              </Paragraph>
            </View>
            <Disclaimer>* As Temperature increases sourness in coffee increases because of over extraction </Disclaimer>
          </View>
        </View>
        <View>
          <Button disabled={coffeeWeight<=0} onPress={() => setStep(BREW)}>Start</Button>
        </View>
      </View>
    );
  }

  function getView() {
    switch (step) {
      case PREPARATION: {
        return preperation();
      }
      case BREW: {
        const data = {
          title: brewType,
          coffeeWeight: coffeeWeight,
          waterWeight: waterWeight,
          ...coffeeGrind[brewType],
          steps: [
            {
              name: "Bloom",
              Percent: 8,
              Instruction: "Pour "+ (coffeeWeight*2).toString()+"(ml) of water and let it rest for 30s to release CO2",
              time: "30"
            },{
              name: "Final Pour",
              Percent: 100,
              Instruction: "Pour remaining water "+(brewType===FRENCH_PRESS? ",push the piston down to water level and set timer for 3 min 30 sec": "slowly in a circular motion"),
              time: "30"
            }
          ],
        };
        return <BrewStep step={data}></BrewStep>;
      }
    }
  }

  return (
    <ScrollView key="BrewingContainer" style={styles.container} contentContainerStyle={{
        justifyContent: "flex-start",
        alignItems: "center",
      }} showsVerticalScrollIndicator={false}>
      {getView()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  brewFormContainer: {
    marginVertical: "4%",
  },
  container: {
    flex: 1,
    paddingHorizontal: "2%",
    marginVertical: "3%",
    overflow: "visible",

  },
  coffeeWeight: {
    flex: 0.5,
    borderBottomColor: Colors.grey300,
    borderBottomWidth: 1,
    paddingBottom: "3%",
  },
  grind: {
    flexDirection: "row",
    paddingTop: "2%",
  },
  iconContainer: { flexDirection: "row", padding: "5%", paddingBottom: "4%" },
  icon: { width: 90, height: 90, margin: "3%",  backgroundColor: Colors.white },
  paragraph: {},
  subtitle: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "2%",
    marginVertical: "2%",
  },
  title: {
    marginTop: 30,
    fontWeight: "bold",
  },
  waterCalculator: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
  },
  waterWeight: {
    flex: 0.5,
    textAlign: "center",
  },
  weightContainer: {
    alignItems: "baseline",
    padding: "2%",
    marginVertical: "2%",
    borderWidth: 1,
    borderColor: Colors.grey300,
    borderRadius: 20,
  },
  weightContainerheader: {
    paddingLeft: "2%",
    marginBottom: "2%",
  },
  brewMethodheader: {
    paddingLeft: "2%",
  },
});
