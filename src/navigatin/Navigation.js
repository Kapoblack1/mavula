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
import VideoSectionScreen from '../screens/VideoSectionScreen';
import FilesScreen from "../screens/FilesScreen";
import VideoReproductionScreen from "../screens/VideoReproductionScreen";
import UploadPDFScreen from '../screens/UploadScreen';
import DocumentViewerScreen from '../screens/DocumentViewerScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UploadPDFScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Login1" component={LoginScreen1} />
        <Stack.Screen name="FilesScreen" component={FilesScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="StorageScreen" component={StorageScreen} />
        <Stack.Screen name="SlideMenuScreen" component={SlideMenuScreen} />
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
        <Stack.Screen name="UploadPDFScreen" component={UploadPDFScreen} />
        <Stack.Screen name="DocumentViewerScreen" component={DocumentViewerScreen} />
        <Stack.Screen
          name="VideoSectionScreen"
          component={VideoSectionScreen}
        />
        <Stack.Screen
          name="VideoReproductionScreen"
          component={VideoReproductionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};//DocumentViewerScreen