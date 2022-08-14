import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Cart, Home, Profile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import {Images} from '../utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabIcon: {
    width: 20,
    height: 20,
  },
});

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.iconHomeA} style={styles.tabIcon} />
            ) : (
              <Image source={Images.iconHome} style={styles.tabIcon} />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.iconCartA} style={styles.tabIcon} />
            ) : (
              <Image source={Images.iconCart} style={styles.tabIcon} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.iconProfileA} style={styles.tabIcon} />
            ) : (
              <Image source={Images.iconProfile} style={styles.tabIcon} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;
