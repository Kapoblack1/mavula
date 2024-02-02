import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderMenu from '../Components/Menu/header';
import { Export } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';


export default function SlideMenuScreen({
  onClosePress,
  ShowProfile,
  ShowHome,
  handleLogout,
}) {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigation();
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.slideMenu}></View>
        <HeaderMenu onClosePress={onClosePress}></HeaderMenu>
        <View style={styles.container1}>
          <TouchableOpacity onPress={ShowHome} style={styles.touchableText}>
            <Text style={styles.text}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ShowProfile} style={styles.touchableText}>
            <Text style={styles.text}>Minha conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuPress("Armazenamento")}
            style={styles.touchableText}
          >
            <Text style={styles.text}>Armazenamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuPress("Turmas")}
            style={styles.touchableText}
          >
            <Text style={styles.text}>Turmas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuPress("Definiçôes")}
            style={styles.touchableText}
          >
            <Text style={styles.text}>Definiçôes</Text>
          </TouchableOpacity>

          <View style={styles.container2}>
            <TouchableOpacity
              onPress={handleLogout}
              style={styles.touchableText}
            >
              <Export style={styles.logout}></Export>
              <Text style={styles.text1}>Terminar Sessão</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const handleMenuPress = (tab) => {
  // Adicione o código para lidar com a seleção de menu conforme necessário
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(238,247,254)"
  },
  container1: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: "30%"
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  container3: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: 18,
    marginBottom: 24
  },
  text1: {
    color: "black",
    fontSize: 18,
  },
  logout: {
    transform: [{ rotate: "90deg" }],
    color: "black",
    marginRight: 15,
  },
  touchableText: {
    flexDirection: "row",
    alignItems: "center"
  },slideMenu:{
    flexGrow: 1,
    backgroundColor: "white",
    position: "absolute",
  }
});
