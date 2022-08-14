import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './navigation';
import {enableScreens} from 'react-native-screens';
import {Colors} from './utils';

enableScreens();

const MainApp = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: Colors.blueMiddle}} />
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
