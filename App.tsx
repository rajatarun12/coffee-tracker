import React, { Component, useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import {
  Authenticator,
  withAuthenticator,
  AmplifyTheme,
} from "aws-amplify-react-native";

import Amplify from "@aws-amplify/core";

import config from "./aws-exports";

Amplify.configure(config);

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import {
  green100,
  purple400,
} from "react-native-paper/lib/typescript/src/styles/colors";
import { Colors } from "react-native-paper";

interface IProps{
  loggedIn: any
}

class NewApp extends Component<IProps> {

  setLoggedIn:any;
  colorScheme:any;
  constructor(props:any){
    super(props);
    this.setLoggedIn = props.loggedIn;
  }

  // componentWillMount(){
  //   this.colorScheme = useColorScheme();
  // }

  onStateChange(state:any){
    console.log(state);
    if (state === 'signedIn') {
      console.log(state);
      this.setLoggedIn(true);
    } else if(state === 'signIn'){
      this.setLoggedIn(false);
    }
  }
  render() {
    const backgroundColor =
      Colors.white;

    const MyNavBar = Object.assign({}, AmplifyTheme.navBar, {
      backgroundColor: backgroundColor
    });
    const MyNavButton = Object.assign({}, AmplifyTheme.navButton, {
      borderRadius: 50,
      backgroundColor: Colors.deepPurple900,
    });
    const Container = Object.assign({}, AmplifyTheme.container, {
      backgroundColor: backgroundColor, height: "100%"
    });
    const MyTheme = Object.assign({}, AmplifyTheme, {
      navBar: MyNavBar,
      navButton: MyNavButton,
      container: Container,
    });
    const signUpConfig = {
      hiddenDefaults: ["phone_number"],
    };
    return (
      <Authenticator
        includeGreetings="true"
        usernameAttributes="email"
        signUpConfig={signUpConfig}
        theme={MyTheme}
        onStateChange={this.onStateChange.bind(this)}
      ></Authenticator>
    );
  }
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{backgroundColor: Colors.black}}>
        { !loggedIn ? <NewApp loggedIn={setLoggedIn}/> : 
        <Navigation colorScheme={colorScheme} />}
      </SafeAreaProvider>
    );
  }
}
export default App;
