import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Folder from "../Components/ContentFolder";

const menuIcon = require('../../assets/menu.png');
const arrow = require('../../assets/arrowdown.png');
const filtro = require('../../assets/filtro.png');

export default function HomeScreen({ onClosePress }) {
  return (
    <View style={styles.pag}>
      <View style={styles.container}>
        <Text style={styles.text}>Teu espaço</Text>
        <TouchableOpacity onPress={onClosePress}>
        <Image source={menuIcon} style={styles.image} />
        </TouchableOpacity>
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
            placeholder='Pesquisa pasta'
            style={styles.input}
            placeholderTextColor="black" 
            fontSize={16}
          />
        </View>
      </View>

      <View style={styles.div1}>
        <View style={styles.div2}>
          <Text style={styles.recentes}>Recentes</Text>
          <Image source={arrow} style={styles.imageArrow} />
        </View>
        
        <Image source={filtro} style={styles.filtro} />
      </View>
      <ScrollView style={styles.pag}>
      
       

        <View style={styles.folderView}>
          <Folder folderName="FolderName" folderDescription="Dezembro 20.2020" color="#EEF7FE" />
          <Folder folderName="FolderName" folderDescription="Dezembro 20.2020" color="#FFFBEC" />
        </View>

        <View style={styles.folderView}>
          <Folder folderName="FolderName" folderDescription="Dezembro 20.2020" color="#FEEEEE" />
          <Folder folderName="FolderName" folderDescription="Dezembro 20.2020" color="#F0FFFF" />
        </View>

        <View style={styles.folderView}>
          <Folder folderName="FolderName" folderDescription="Dezembro 20.2020" color="#FFFBEC" />
          <Folder folderName="FolderName" folderDescription="Dezembro 20.2020" color="#EEF7FE" />
        </View>

        <View style={styles.folderView}>
          <Folder folderName="FolderName" folderDescription="Dezembro 20.2020" color="#F0FFFF" />
          <Folder folderName="FolderName" folderDescription="Dezembro 20.2020" color="#FEEEEE" />
        </View>
      
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pag: {
    marginLeft: 17,
    marginRight: 10,

  },
  recentes: {
    fontSize: 18,
  },
  container: {
    marginTop: 80,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width: 20,
    height: 50,
    resizeMode: 'contain',
  },
  imageArrow: {
    marginLeft: 7,
    width: 20,
    height: 45,
    resizeMode: 'contain',
  },
  filtro: {

    
  },
  div: {
    
    marginBottom: 30,
    flexDirection: 'row',
    
  },
  div1: {
    borderColor: 'black',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  div2: {
    flexDirection: 'row', 
    alignItems: 'center',
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
  folderView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});