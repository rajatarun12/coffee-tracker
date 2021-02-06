import * as React from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  Picker as Picker,
  ImageProps,
  Image as DefaultImage
} from "react-native";

import Colors from "../constants/Colors";
import { Colors as color } from 'react-native-paper';
import { Button as PaperButton, Menu, Provider } from "react-native-paper";
import useColorScheme from "../hooks/useColorScheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInputProps } from "react-native-paper/lib/typescript/src/components/TextInput/TextInput";

function getFontColor(colorScheme:any){
  return colorScheme === 'dark' ? color.white : color.black; 
}
  
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, ...otherProps } = props;
  const fontColor = {color :getFontColor(useColorScheme())}
  return <DefaultTextInput style={[style, fontColor]} {...otherProps}></DefaultTextInput>;
}

export function Button(props: any) {
  const fontColor = {color :getFontColor(useColorScheme()), backgroundColor: props.disabled ? color.grey300:(props.color || color.deepPurple900), borderRadius: 20}
  return <TouchableOpacity style={[props.style, fontColor]} disabled={props.disabled} onPress={props.onPress}><PaperButton mode="contained" {...props} style={[{borderRadius: 20}, props.style, fontColor]}/></TouchableOpacity>;
}

export function Dropdown(props: any) {
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue); props.onSelect(itemValue);}}
      >
        {props.items.map((item: any) => (
          <Picker.Item key={item.title} label={item.title} value={item.title} />
        ))}
      </Picker>
    </View>
  );
}

export function Image(props: ImageProps){
  
  return <DefaultImage style={[props.style, {backgroundColor: color.white }]} {...props}></DefaultImage>
}
