import * as React from 'react';

import { Text, TextProps } from './Themed';
import { Platform } from '@aws-amplify/core';
import useColorScheme from "../hooks/useColorScheme";
import { Colors } from 'react-native-paper';

function getFontColor(colorScheme:any){
return colorScheme === 'dark' ? Colors.white : Colors.black; 
}

const fontFamily = Platform.OS === "android" ? "Roboto" :  "Avenir";
// const fontFamily = Platform.OS === "android" ? "Roboto" :  "Kohinoor Telugu";

const baseFont = 6;

const fontSizes = {
  MonoText: baseFont*2.5,
  Header: baseFont*5,
  SubHeader: baseFont*4,
  Paragraph: baseFont * 3,
  Disclaimer: baseFont * 2
};


export function MonoText(props: TextProps) {
  const [fontColor, setFontColor] = React.useState(getFontColor(useColorScheme()));
  return <Text {...props} style={[props.style, { fontFamily: fontFamily, fontSize: fontSizes.MonoText, color: fontColor }]} />;
}

export function Header(props: TextProps) {
  const [fontColor, setFontColor] = React.useState(getFontColor(useColorScheme()));
  return <Text {...props} style={[props.style, { fontFamily: fontFamily, fontSize: fontSizes.Header, textDecorationLine: 'underline', color: fontColor }]} />;
}

export function SubHeader(props: TextProps) {
  const [fontColor, setFontColor] = React.useState(getFontColor(useColorScheme()));
  return <Text {...props} style={[props.style, { fontFamily: fontFamily, fontSize: fontSizes.SubHeader, textDecorationLine: 'underline', color: fontColor }]} />;
}

export function Paragraph(props: TextProps) {
  const [fontColor, setFontColor] = React.useState(getFontColor(useColorScheme()));
  return <Text {...props} style={[props.style, { fontFamily: fontFamily, fontSize: fontSizes.Paragraph, color: fontColor }]} />;
}

export function Disclaimer(props: TextProps) {
  const [fontColor, setFontColor] = React.useState(getFontColor(useColorScheme()));
  return <Text {...props} style={[props.style, { fontFamily: fontFamily, fontSize: fontSizes.Disclaimer, color: fontColor }]} />;
}