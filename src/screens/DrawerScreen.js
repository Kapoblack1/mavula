// DrawerScreen.js
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import SlideMenuScreen from './SlideMenuScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

import HomeScreen from '../screens/HomeScreen';
import HeaderMenu from '../Components/Menu/header'; // Importe o componente HeaderMenu
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import { useNavigation } from "@react-navigation/native";
import { signOut } from "@firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

export default function DrawerScreen({onClosePress}) {
    const navigation = useNavigation();
    const [showMenu, setShowMenu] = useState(false);
    const [ShowProfile, setShowProfile] = useState(false);
    const [ShowHome, setShowHome] = useState(true);
    const [ShowSettings, setShowSettings] = useState(false);
    const moveToRigth = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;
    let componentToRender;
    function Drawer() {
      Animated.timing(scale, {
        toValue: showMenu ? 1 : 0.6,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(moveToRigth, {
        toValue: showMenu ? 0 : 230,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setShowMenu(!showMenu);
    }

    function ShowProfileScreen() {
      setShowProfile(true);
      setShowHome(false);
      setShowSettings(false);
    }
    function ShowHomeScreen() {
      setShowProfile(false);
      setShowHome(true);
      setShowSettings(false);
    }

    if (ShowHome) {
      componentToRender = <HomeScreen onClosePress={Drawer}></HomeScreen>;
    } else if (ShowProfile) {
      componentToRender = <ProfileScreen onClosePress={Drawer}></ProfileScreen>;
    } else if (ShowSettings) {
      componentToRender = <SettingsScreen></SettingsScreen>;
    }

    const handleLogout = () => {
      signOut(FIREBASE_AUTH)
        .then(() => {
          // Sign-out successful.
          console.log("User signed out successfully");
          // Navigate to login screen or reset app state as needed
          navigation.navigate("Login"); // Make sure you have the navigation prop available
        })
        .catch((error) => {
          // An error happened.
          console.error("Error signing out:", error);
        });
    };

    return (
      <View style={styles.container}>
        <SlideMenuScreen
          onClosePress={Drawer}
          ShowProfile={ShowProfileScreen}
          ShowHome={ShowHomeScreen}
          handleLogout={handleLogout}
        />
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: "white",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            transform: [{ scale: scale }, { translateX: moveToRigth }],
          }}
        >
          <View style={styles.container2}>{componentToRender}</View>
        </Animated.View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    container1: {


    }, container2: {
        flex: 1,
        flexDirection: "row",

    }, button: {

    }
});