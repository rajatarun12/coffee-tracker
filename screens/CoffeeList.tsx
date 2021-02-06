
import { Paragraph, MonoText, SubHeader } from "../components/StyledText";
import { IconButton, List, Colors } from "react-native-paper";
import { ListCoffeeTrackersQuery, DeleteCoffeeTrackerInput, ModelIDInput, ModelCoffeeTrackerFilterInput } from "../src/API";
import React, { useState } from "react";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listCoffeeTrackers } from "../src/graphql/queries";
import { deleteCoffeeTracker } from "../src/graphql/mutations";


export default function CoffeeList(props) {

    const [
        coffeeTrackers,
        setCoffeeTrackers,
      ] = useState<ListCoffeeTrackersQuery>();
      const userId = props.userId;

    async function handleCoffeeTrackers() {
        let userIdType: ModelIDInput = {
          eq: userId,
        };
        let coffeeInput: ModelCoffeeTrackerFilterInput = {
          userID: userIdType,
        };
        try {
          const coffeeTrackersResult = await API.graphql(
            graphqlOperation(listCoffeeTrackers, { filter: coffeeInput })
          );
          const coffeeTrackersResultData: ListCoffeeTrackersQuery =
            coffeeTrackersResult.data;
          setCoffeeTrackers(coffeeTrackersResultData);
        } catch (error) {
          console.log("error: ", error);
        }
    }
      
    async function _deleteItem(id: string) {
        let coffeeTrackerInput: DeleteCoffeeTrackerInput = {
          id: id,
        };
        try {
          await API.graphql(
            graphqlOperation(deleteCoffeeTracker, { input: coffeeTrackerInput })
          );
          handleCoffeeTrackers();
        } catch (error) {
          console.log("error: ", error);
        }
    }
    
    var items = [];
    var parameters = [
      "locationName",
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
      "BrewTime",
    ];

    handleCoffeeTrackers();
    function coffeeItems(item) {
      var coffeeItemList = [];
      parameters.forEach((param) => {
        if (item[param]) {
          coffeeItemList.push(
            <List.Item
              title={<Paragraph>{param + ": " + item[param]}</Paragraph>}
              style={{ paddingStart: "10%" }}
            />
          );
        }
      });
      return coffeeItemList;
    }
    if (
      coffeeTrackers &&
      coffeeTrackers.listCoffeeTrackers &&
      coffeeTrackers.listCoffeeTrackers.items
    ) {
      coffeeTrackers?.listCoffeeTrackers?.items.forEach((item: any) => {
        items.push(
          <List.Accordion
            title={
              <Paragraph>{item.coffeeName + " - " + item.locationName}</Paragraph>
            }
          >
            <IconButton
              icon="delete"
              color={Colors.red500}
              size={20}
              style={{ alignSelf: "flex-end" }}
              onPress={() => _deleteItem(item.id)}
            />
            {coffeeItems(item)}
          </List.Accordion>
        );
      });
    } else {
      items.push(<MonoText>No Data</MonoText>);
    }
    return (
      <List.Section
        title={<SubHeader>Your Coffee's</SubHeader>}
        style={{ backgroundColor: "transparent", marginTop: 50 }}
      >
        {items}
      </List.Section>
    );
  }