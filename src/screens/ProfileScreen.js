//ProfileScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Folder from "../Components/ContentFolder";
import ListFileItem from "../Components/List-File-Item";
import { FILES } from "../mocks/files";

const arrow = require("../../assets/arrowleft.png");
const menu = require("../../assets/menu1.png");
const foto = require("../../assets/foto.png");
const pro = require("../../assets/pro.png");
const add = require("../../assets/add.png");
const arrowright = require("../../assets/arrowright.png");
const settings = require("../../assets/setting5.png");
const arrangevertical = require("../../assets/arrangevertical.png");

export default function ProfileScreen({ onClosePress }) {
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onClosePress}>
          <Image source={arrow} />
        </TouchableOpacity>
        <Text style={styles.minhaConta}>Minha Conta</Text>
        <Image source={menu} style={styles.menuStyle} />
      </View>

      <View style={styles.perfil}>
        <View style={styles.fotoDiv}>
          <Image source={foto} style={styles.foto} />
          <Image source={pro} style={styles.pro} />
        </View>
        <View style={styles.descrView}>
          <Text style={styles.nome}>Luís Alexandre</Text>
          <Text></Text>
          <Text style={styles.title}>Ui/Ux designer</Text>
          <Text></Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            bibendum pellentesque mauris, nibh senectus .
          </Text>
        </View>
      </View>
      <View style={styles.middleButtons}>
        <Text style={styles.minhaConta}>Minhas pastas</Text>
        <View style={styles.mbView}>
          <Image source={add} style={styles.middlebuttonStyle} />
          <Image source={settings} style={styles.middlebuttonStyle} />
          <Image source={arrowright} />
        </View>
      </View>
      <View style={styles.folderView}>
        <Folder
          folderName="FolderName"
          folderDescription="Dezembro 20.2020"
          color="#EEF7FE"
        />

        <Folder
          folderName="FolderName"
          folderDescription="Dezembro 20.2020"
          color="#FFFBEC"
        />
      </View>
      <View style={styles.folderView}>
        <Folder
          folderName="FolderName"
          folderDescription="Dezembro 20.2020"
          color="#FEEEEE"
        />

        <Folder
          folderName="FolderName"
          folderDescription="Dezembro 20.2020"
          color="#F0FFFF"
        />
      </View>
      <View style={styles.middleButtons}>
        <Text style={styles.minhaConta}>Carregamentos Recentes</Text>
        <Image source={arrangevertical} style={styles.middlebuttonStyle} />
      </View>
      {FILES.map((file) => (
        <ListFileItem
          name={file.name}
          ext={file.ext}
          date={file.date}
          size={file.size}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
      marginLeft: 28,
      marginRight: 25,
      backgroundColor: "white"
    },
    container1:{
      backgroundColor: "white"
    },
    menuStyle:{
      marginRight: 10,
      
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
    },
    pro:{
      borderStyle: 'solid',
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
    middleButtons:{
      flexDirection: 'row',
      marginTop: 14,
      marginLeft: 30,
      marginRight: 30,
      justifyContent: 'space-between',
    },
    mbView:{
      flexDirection: 'row',
    },
    middlebuttonStyle:{
      marginRight: 20,
    },
    folderView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
      marginLeft: 26,
      marginRight: 26,
      marginTop: 14,
    },
    data:{
      fontSize: 9,
    },
});