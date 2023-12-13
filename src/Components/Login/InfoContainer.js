import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { FingerScan, ArrowRight, Instagram, Facebook } from 'iconsax-react-native';

const windowWidth1 = Dimensions.get('window').width - 100;

export default function InfoContainer({ isVisible, toggleContainerInfo, showInputRegistar }){
  return (
    <View>
      <Text style={styles.textMavula}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue bibendum pellentesque mauris, nibh senectus dignissim euismod diam. Sed arcu eget et, id arcu ultricies scelerisque nisl.
      </Text>
      <Text style={styles.textConectese}>Conecte-se a sua instituição</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText1}>Smart id</Text>
          <FingerScan size="24" color="rgb(86,125,244)" />
        </TouchableOpacity>
        <TouchableOpacity onPress={showInputRegistar} style={styles.button1}>
          <Text style={styles.buttonText}>Login</Text>
          <ArrowRight size="24" color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.social}>
        <Instagram style={styles.insta} size="30" color="#464646" />
        <Facebook style={styles.face} size="30" color="#464646" />
      </View>
      <View style={styles.social}>
        <TouchableOpacity onPress={showInputRegistar}>
          <Text style={styles.criarConta}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      backgroundColor: "white"
    },
    container: {
      backgroundColor: "white",
      flex: 1,
    },
    containerInfo: {
      flex: 1,
      backgroundColor: "white",
      paddingHorizontal: 20,
  
    },
    BoasVindas: {
      color: 'black',
      fontSize: 20,
    },
    text1: {
      color: 'rgb(151,151,151)',
      fontSize: 20,
    },
    textMavula: {
      paddingRight: 85,
      marginBottom: 30,
      color: "rgb(151,151,151)"
    },
    button: {
      height: 47,
      width: "47%",
      backgroundColor: "#eef2fe",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      flexDirection: "row",
    },
    button1: {
      height: 47,
      width: "47%",
      backgroundColor: "rgb(86,125,244)",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      borderRadius: 10,
      color: "white"
  
    },
    button2: {
      height: 47,
      width: "100%",
      backgroundColor: "rgb(86,125,244)",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      borderRadius: 10,
      color: "white"
  
    },
    buttons: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    },
    buttonText: {
      color: "white",
      marginRight: 12,
    },
    buttonText1: {
      color: "rgb(86,125,244)",
      marginRight: 12
    },
    image: {
      width: 200,
      height: 20,
    },
    mavula: {
  
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10
  
    }, textConectese: {
      color: "rgb(151,151,151)",
      marginBottom: 25,
  
    },
    social: {
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      marginBottom: 10,
      marginTop: 25
    },
    insta: {
      marginRight: 10,
      color: "#464646"
    },
    face: {
      marginLeft: 10,
      color: "#464646"
    },
    criarConta: {
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      color: "#797979"
    },
    inputContainer: {
      justifyContent: "center",
      alignContent: "center",
      paddingHorizontal: 20,
    },
    input: {
      height: 60,
      borderWidth: 1.5,
      borderColor: "#D4D4D4",
      paddingLeft: 30,
      borderRadius: 10,
      marginBottom: 30,
      width: windowWidth1
    },
    inputIcon: {
      height: 60,
      borderWidth: 1.5,
      borderColor: "#D4D4D4",
      paddingLeft: 30, borderRadius: 10,
      marginBottom: 30,
      width: windowWidth1,
      flexDirection: 'row',
      alignItems: 'center'
  
    }
  });
  