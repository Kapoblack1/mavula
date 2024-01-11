import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ContentFolder = ({ folderName, folderDescription, color }) => {
    
  let folder, dot, cor;

  if (color === '#EEF7FE') {
    folder = require('../../assets/folderBlue.png');
    dot = require('../../assets/dotBlue.png');
    cor = '#567DF4';
  }
  else{
    if(color === '#FFFBEC'){
      folder = require('../../assets/folderYellow.png');
      dot = require('../../assets/dotYellow.png');
      cor = '#F3C939';
    }
    else{
      if(color === '#FEEEEE'){
        folder = require('../../assets/folderRed.png');
        dot = require('../../assets/dotRed.png');
        cor = '#F45656';
      }
      else{
        folder = require('../../assets/folderCian.png');
        dot = require('../../assets/dotCian.png');
        cor = '#34DEDE';
      }
    }
  }
  return (
    <View 
      style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.header}>
      <Image source={folder}  />
      <Image source={dot}  />
      </View>
      <Text style={[styles.title, { color: cor }]}>{folderName}</Text>
      <Text style={[styles.description, { color: cor }]}>{folderDescription}</Text>
    </View>
  );
};

export default ContentFolder;

const styles = StyleSheet.create({
  container: {
    // width: "50%",
    // height: "87%",
    marginLeft: "0%",
    flex: 1,
    // marginRight: "2%",
    gap: 5,
    marginBottom: "4%",
    borderRadius: 15,
    paddingRight: 10,
    paddingBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    //fontSize: 13,
    //marginTop: 8,
    //color: colors.primary,
  },
  description: {
    fontSize: 11,
    //color: colors.primary,
  },
});