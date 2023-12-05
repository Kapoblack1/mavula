// LoginScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const windowHeight = Dimensions.get('window').height;
const windowHeight1 = Dimensions.get('window').height / 2;
const windowWidth = Dimensions.get('window').width;

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require("../../assets/hero_Nero1.png")}
      style={[styles.backgroundImage, { height: windowHeight / 2 }, { width: windowWidth + 65 }]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Seja bem-vindo a</Text>
        <Text>MAVULA</Text>
        <View style={styles.textMavula}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          </Text>
          <Text>Conecte-se à sua instituição</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text>Smart id</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
          </View>
        </View>
        {/* Adicione mais conteúdo aqui, se necessário */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    marginTop: windowHeight1,
    marginLeft: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  textMavula: {
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: windowWidth - 55,
  },
  button: {
    height: 50,
    width: 90,
    backgroundColor: "#eef2fe",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"

  },
  buttons:{
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  image:{
    width: 200,
    height: 20,
  }
});
