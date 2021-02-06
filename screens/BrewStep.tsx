import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import { View, Button, Image } from '../components/Themed';
import { Header, SubHeader, Paragraph, Disclaimer, MonoText } from '../components/StyledText';
import coffeeGrind, { Images } from '../constants/CoffeeTypes';
import { Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import useColorScheme from '../hooks/useColorScheme';



function BrewStepTemplate(props, step, colorScheme){
    const data = props.step;
    const brewType = coffeeGrind[data["title"]];
    const percentage:number = data && data["steps"] && data["steps"][0] && data["steps"][step]["Percent"];
    const stepName:String = data && data["steps"] && data["steps"][0] && data["steps"][step]["name"];
    const Instruction:String = data && data["steps"] && data["steps"][0] && data["steps"][step]["Instruction"];
    
    const computed = {borderLeftWidth: Number(300*(percentage/100)), borderColor: colorScheme === 'dark'? Colors.white: Colors.black };
    
    return (<View style={styles.container}>
        <Header>Brew</Header> 
        <SubHeader>{data["title"]}</SubHeader>
        <View>
            <View style={styles.grind}>
              <Paragraph>Grind : </Paragraph>
              <Paragraph>
                {brewType && brewType["grind"]}
              </Paragraph>
            </View>
            <View style={styles.grind}>
              <Paragraph>Temperature : </Paragraph>
              <Paragraph>
              {brewType && brewType["temp"]}
              </Paragraph>  
            </View>
          </View>
          <View style={styles.grind}>
          <Paragraph>Step Name: </Paragraph>
              <Paragraph>
              {stepName}
              </Paragraph> 
          </View>
          <Paragraph >Instructions:</Paragraph>
          <View style={styles.instructions}>
          <Paragraph>{Instruction}</Paragraph>
          </View>
          <View style={styles.imageContainer}>
            <Image
                source={Images && Images[data["title"]]}
                style={{width:200, height: 200, backgroundColor: Colors.white}}
              ></Image>
          </View>
          <Paragraph style={{alignSelf:"center"}}>Water</Paragraph>
          <View style={{ ...styles.waterIndicator, ...computed }}></View>
    </View>)
}

export default function BrewStep(props){
    const [colorScheme, setColorScheme] = useState(useColorScheme());
    const [step, setStep] = useState(0);
    return (<ScrollView>
        {BrewStepTemplate(props, step, colorScheme)}
        <View style={styles.footer}>
        {props.step.steps.length-1 === step ? <Paragraph>Congrats!</Paragraph>:<Button onPress={() => setStep(step+1)}>Next step</Button>}
        </View>
    </ScrollView>)
}

const styles:any = StyleSheet.create({
    container:{
        flexDirection: 'column',
        
        overflow: "hidden"
    },
    footer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    grind: {
        flexDirection: 'row',
        paddingVertical: "1%"
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "5%"
    },
    instructions: {paddingVertical: "2%"},
    waterIndicator: {
        borderWidth: 1,borderRadius: 50, width: 300, height: 30,
        alignSelf: 'center', marginBottom: "5%"
    }
})