import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify from '@aws-amplify/core';

import config from './aws-exports';

Amplify.configure(config)

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true, usernameAttributes: 'email' , signUpConfig: {
    hiddenDefaults: ["phone_number"]
}})
