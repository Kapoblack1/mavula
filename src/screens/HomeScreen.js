import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Folder from "../Components/ContentFolder";

const menuIcon = require('../../assets/menu.png');
const arrow = require('../../assets/arrowdown.png');
const filtro = require('../../assets/filtro.png');

export default function HomeScreen({ onClosePress }) {
  const [folders, setFolders] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['#EEF7FE', '#FFFBEC', '#FEEEEE', '#F0FFFF'];

  const createFolder = () => {
    const newFolder = {
      folderName: `FolderName ${folders.length + 1}`,
      folderDescription: 'Nova Pasta',
      color: colors[colorIndex],
    };

    setColorIndex((colorIndex + 1) % colors.length);
    setFolders((prevFolders) => [...prevFolders, newFolder]);
  };

  const handleFolderPress = (folder) => {
    console.log(`Pasta ${folder.folderName} foi pressionada!`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
            color={'black'}
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

      <View style={styles.div1}>
        <View style={styles.div2}>
          <Text style={styles.recentes}>Recentes</Text>
          <Image source={arrow} style={styles.imageArrow} />
        </View>
        <Image source={filtro} style={styles.filtro} />
      </View>

      <ScrollView style={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.folderView}>
          {folders.map((folder, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleFolderPress(folder)}>
              <Folder
                folderName={folder.folderName}
                folderDescription={folder.folderDescription}
                color={folder.color}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity onPress={createFolder} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 17,
    marginRight: 10,
  },
  header: {
    marginTop: 80,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  recentes: {
    fontSize: 18,
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
  filtro: {},
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
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#22215B', // Customize the button style
    padding: 15,
    borderRadius: 35,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scroll: {
    flex: 1,
  },
  folderView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
});
