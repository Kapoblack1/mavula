import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { FingerScan, ArrowRight, Instagram, Facebook } from 'iconsax-react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Student, Password } from 'phosphor-react-native';

const windowWidth1 = Dimensions.get('window').width - 100;
export default function ImputRegister({ studentNumber, password, setStudentNumber, setPassword, toggleContainerInfo, createUser }){
    return(
        <View style={styles.inputContainer}>
            <View>
            <Text style={styles.textConectese}>Conecte-se a sua instituição</Text>
          </View>

          <View style={styles.inputIcon}>
          <Student/>
            <TextInput
              placeholder="Email institucional"
              placeholderTextColor="#464646"
              value={studentNumber}
              onChangeText={(text) => setStudentNumber(text)}
              style={styles.inputSpace}
            />
          </View>

          <View style={styles.inputIcon}>
            <Password />
            <TextInput
              placeholder="Código da sua instituição"
              placeholderTextColor="#464646"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.inputSpace}
            />
          </View>

          <TouchableOpacity onPress={createUser} style={styles.button2}>
            <Text style={styles.buttonText}>Pedir acesso</Text>
            <ArrowRight size="24" color="white" />
          </TouchableOpacity>
    
          <View style={styles.social}>
            <Instagram style={styles.insta} size="30" color="#464646" />
            <Facebook style={styles.face} size="30" color="#464646" />
          </View>
    
          <View style={styles.social}>
            <TouchableOpacity onPress={toggleContainerInfo}>
              <Text style={styles.criarConta}>Já tenho uma conta. Fazer Login</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}
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
      color: "rgb(151,151,151)"
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
      paddingLeft: 30,    borderRadius: 10,
      marginBottom: 30,
      width: "100%",
      flexDirection: 'row',
      alignItems: 'center'
  
    },
    inputSpace:{
        marginLeft: 15
    }
  });