// LoginScreen.js
import React, {useState} from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import InfoContainer from "../Components/Login/InfoContainer";
import InputContainer from "../Components/Login/InputContainer";
import InputRegister from '../Components/registar/InputRegistar';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from '@firebase/firestore';
const windowWidth1 = Dimensions.get("window").width - 100;

export default function LoginScreen() {
  const navigation = useNavigation();
  const [infoContainerVisible, setInfoContainerVisible] = useState(true);
  const [inputContainerVisible, setInputContainerVisible] = useState(false);
  const [inputRegistarVisible, setInputRegistarVisible] = useState(false);
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeText, setWelcomeText] = useState("Seja bem-vindo a");
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const showInputContainer = () => {
    setInfoContainerVisible(false);
    setInputContainerVisible(true);
    setInputRegistarVisible(false);
    setWelcomeText("Aceda a");
  };

  const showInputRegistar = () => {
    setInfoContainerVisible(false);
    setInputContainerVisible(false);
    setInputRegistarVisible(true);
    setWelcomeText("Crie uma conta");
  };

  function Login() {
    navigation.navigate("DrawerScreen");
  }

  function handleLoginSuccess(userCredential) {
    console.log("Usuário autenticado com sucesso:", userCredential.user.uid);
    navigation.navigate("DrawerScreen");
  }

  function handleLoginError(error) {
    console.error("Erro ao autenticar usuário:", error.message);
  }

  function createUserSuccess(userCredential) {
    console.log("Novo usuário criado com sucesso:", userCredential.user.uid);
    navigation.navigate("DrawerScreen");
  }

  function createUserError(error) {
    console.error("Erro ao criar usuário:", error.message);
  }

  function handleLogin() {
    signInWithEmailAndPassword(FIREBASE_AUTH, studentNumber, password)
      .then(handleLoginSuccess)
      .catch((signInError) => {
        handleLoginError(signInError);
      });
  }

  // function createUser() {
  //   createUserWithEmailAndPassword(FIREBASE_AUTH, studentNumber, password)
  //     .then(createUserSuccess)
  //     .catch(createUserError);
  // }

  function createUser() {
    createUserWithEmailAndPassword(FIREBASE_AUTH, studentNumber, password)
      .then((userCredential) => {
        const userRef = doc(FIREBASE_DB, "users", userCredential.user.uid);
        setDoc(userRef, { role: "student" }, { merge: true })
          .then(() => {
            console.log("User role set to student");
            createUserSuccess(userCredential);
          })
          .catch(createUserError);
      })
      .catch(createUserError);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Image
          source={require("../../assets/hero_Nero1.png")}
          style={[
            styles.backgroundImage,
            { height: windowHeight / 2.06 },
            { width: windowWidth + 65 },
          ]}
        ></Image>
        <View style={styles.containerInfo}>
          <Text style={styles.BoasVindas}>{welcomeText}</Text>
          <Text style={styles.mavula}>Mavula</Text>
          {infoContainerVisible && (
            <InfoContainer
              isVisible={infoContainerVisible}
              showInputRegistar={showInputContainer}
            />
          )}
        </View>

        {inputContainerVisible && (
          <InputContainer
            studentNumber={studentNumber}
            password={password}
            setStudentNumber={setStudentNumber}
            setPassword={setPassword}
            toggleContainerInfo={showInputRegistar}
            Login={handleLogin}
          />
        )}

        {inputRegistarVisible && (
          <InputRegister
            studentNumber={studentNumber}
            password={password}
            setStudentNumber={setStudentNumber}
            setPassword={setPassword}
            toggleContainerInfo={showInputContainer}
            Login={Login}
            createUser={createUser}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginBottom: 15,
    marginTop: 35
  },
  insta: {
    marginRight: 10,
  },
  face: {
    marginLeft: 10
  },
  criarConta: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    paddingLeft: 30,
    borderRadius: 10,
    marginBottom: 30,
    width: windowWidth1
  },
  inputIcon: {
    height: 60,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    paddingLeft: 30,    borderRadius: 10,
    marginBottom: 30,
    width: windowWidth1,
    flexDirection: 'row',
    alignItems: 'center'

  }
});
