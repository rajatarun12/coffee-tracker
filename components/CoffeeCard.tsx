import * as React from 'react';
import { ViewProps, View , StyleSheet} from "react-native";
import {Text} from './Themed';

export function CoffeeCard(props:any){
    return (<View style={styles.cardContainer}>
        <Text>{props.coffeeData.coffeeName}</Text>
        <Text>{props.coffeeData.Family}</Text>
    </View>)
}
const styles = StyleSheet.create({
    cardContainer: {
        borderBottomColor: 'rgba(158, 150, 150, .2)',
        borderBottomWidth: 1,
        padding: '10%'
    }
});
  