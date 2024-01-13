import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
  useWindowDimensions,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Folder from "../Components/ContentFolder";
import { useNavigation } from "@react-navigation/native";
import AddButton from "../Components/Add-Button";
import OutsidePressHandler from "react-native-outside-press";
import { FOLDERS } from "../mocks/folders";

const menuIcon = require("../../assets/menu.png");
const arrow = require("../../assets/arrowdown.png");
const filtro = require("../../assets/filtro.png");

const HomeScreen = ({ onClosePress }) => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#EEF7FE", "#FFFBEC", "#FEEEEE", "#F0FFFF"];

  const [folders, setFolders] = useState(FOLDERS);
  const [newFolder, setNewFolder] = useState("");
  const [creationFolder, setCreationFolder] = useState(false);

  const addFolder = () => {
    if (newFolder.trim() !== "") {
      setFolders([
        {
          id: Date.now(),
          name: newFolder,
          color: "#EEF7FE",
          completed: false,
          description: "Agora mesmo",
        },
        ...folders,
      ]);
      setNewFolder("");
    }
    setCreationFolder(false);
  };

  const deleteFolder = (id) => {
    setFolders((prevfolders) =>
      prevfolders.filter((folder) => folder.id !== id)
    );
  };

  return (
    <Pressable
      onPress={addFolder}
      style={[{ height: height, width: width }, styles.pag]}
    >
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
      <ScrollView style={styles.pag}>
        <View style={styles.folderViewContainer}>
          {creationFolder && (
            <Pressable onPress={() => {}} style={styles.folderView}>
              <Folder
                isForCreation
                color="#EEF7FE"
                value={newFolder}
                placeholder="Criar nova pasta"
                onChangeText={(text) => setNewFolder(text)}
              />
            </Pressable>
          )}
          {folders.map((folder) => (
            <Pressable
              onPress={() =>
                navigation.navigate("FilesScreen", {
                  folderName: folder.name,
                })
              }
              style={styles.folderView}
            >
              <Folder
                folderName={folder.name}
                folderDescription={folder.description}
                color={folder.color}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <AddButton
        onPress={() => setCreationFolder(!creationFolder)}
        isPressed={creationFolder}
      />
    </Pressable>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pag: {
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 80,
    marginBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  recentes: {
    fontSize: 18,
  },
  container: {
    marginTop: 80,
    marginBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    width: 20,
    height: 50,
    resizeMode: "contain",
  },
  imageArrow: {
    marginLeft: 7,
    width: 20,
    height: 45,
    resizeMode: "contain",
  },
  filtro: {},
  filtro: {},
  div: {
    marginBottom: 30,
    flexDirection: "row",
  },
  div1: {
    borderColor: "black",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  div2: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(184, 184, 184, 0.6)",
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
  folderViewContainer: {
    flex: 1,
    gap: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  folderView: {
    width: "47%",
    flexDirection: "row",
  },
});
