import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const arrow = require("../../assets/arrowleft.png");
const menu = require("../../assets/menu1.png");
const java1 = require("../../assets/java1.png");

export default function VideoSectionScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.pag}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={arrow} />
        </Pressable>
        <Text style={styles.minhaConta}>Videos</Text>
        <Image source={menu} style={styles.menuStyle} />
      </View>

      <View style={styles.div}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="magnify"
            size={30}
            color={"black"}
            style={styles.icon}
          />
          <TextInput
            inputMode="search"
            placeholder="Pesquisa pasta"
            style={styles.input}
            placeholderTextColor="black"
            fontSize={16}
          />
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate("VideoReproductionScreen", {
            videoName: "Java Bootcamp first",
            videoDescription: "Curso de Java",
            videoSize: "10MB",
            videoTime: "4,5",
          })
        }
      >
        <View style={styles.videoContainer}>
          <Image source={java1} style={styles.videoStyle} />
          <View style={styles.videoInfoContainer}>
            <Text style={styles.minhaConta}>Java Bootcamp first</Text>
            <Text style={styles.minhaConta}>4,5</Text>
            <Text style={styles.minhaConta}>10MB</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.videoContainer}>
        <Image source={java1} style={styles.videoStyle} />
        <View style={styles.videoInfoContainer}>
          <Text style={styles.minhaConta}>Java Bootcamp</Text>
          <Text style={styles.minhaConta}>4,5</Text>
          <Text style={styles.minhaConta}>10MB</Text>
        </View>
      </View>
      <View style={styles.videoContainer}>
        <Image source={java1} style={styles.videoStyle} />
        <View style={styles.videoInfoContainer}>
          <Text style={styles.minhaConta}>Java Bootcamp</Text>
          <Text style={styles.minhaConta}>4,5</Text>
          <Text style={styles.minhaConta}>10MB</Text>
        </View>
      </View>
      <View style={styles.videoContainer}>
        <Image source={java1} style={styles.videoStyle} />
        <View style={styles.videoInfoContainer}>
          <Text style={styles.minhaConta}>Java Bootcamp</Text>
          <Text style={styles.minhaConta}>4,5</Text>
          <Text style={styles.minhaConta}>10MB</Text>
        </View>
      </View>
      <View style={styles.videoContainer}>
        <Image source={java1} style={styles.videoStyle} />
        <View style={styles.videoInfoContainer}>
          <Text style={styles.minhaConta}>Java Bootcamp</Text>
          <Text style={styles.minhaConta}>4,5</Text>
          <Text style={styles.minhaConta}>10MB</Text>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  div: {
    
    marginBottom: 30,
    flexDirection: 'row',
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(184, 184, 184, 0.6)',
    borderRadius: 5,
  },
  icon: {
    marginStart: 10,
  },
  input: {
    marginLeft: 10,
    width: 300,
    height: 50,
  },
  container:{
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    
    
  },
  menuStyle:{
    marginRight: 10,
    
  },
  videoStyle:{
    marginRight: 10,
  },
  videoContainer:{
    flexDirection: 'row',
    borderBottomColor: '#BAB5B5',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  videoInfoContainer:{
    flexDirection: 'column',
  },
  minhaConta:{
    fontWeight: 'bold',

  },
  perfil:{
    backgroundColor: '#FFFFFF',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 50,
    borderRadius: 5,
  },
  fotoDiv:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 130,
    marginTop: 40,
    marginBottom: 10,
  },
  foto:{
    borderStyle: 'solid',
    borderWidth: 1,
  },
  pro:{
    borderStyle: 'solid',
    borderWidth: 1,
    marginRight: 8,
  },
  descrView:{
    alignItems: 'center',
    
  },
  nome:{
    fontWeight: 'bold',
    fontSize: 28,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 17,
  },
  description:{
    textAlign: 'center',
  },
  pag: {
    marginLeft: 28,
    marginRight: 15,
    flex: 1,
  },
});