// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen1 from '../screens/Login1Screen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StorageScreen from '../screens/StorageScreen';
import SlideMenuScreen from '../screens/SlideMenuScreen';
import DrawerScreen from '../screens/DrawerScreen';

const Stack = createStackNavigator();

export default function Navigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
        <Stack.Screen name="StorageScreen" component={StorageScreen}/>
        <Stack.Screen name="SlideMenuScreen" component={SlideMenuScreen}/>
        <Stack.Screen name="DrawerScreen" component={DrawerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};