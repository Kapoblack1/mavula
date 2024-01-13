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

const menuIcon = require("../../assets/menu.png");
const arrow = require("../../assets/arrowdown.png");
const filtro = require("../../assets/filtro.png");

const HomeScreen = ({ onClosePress }) => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const [folders, setFolders] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#EEF7FE", "#FFFBEC", "#FEEEEE", "#F0FFFF"];

  const createFolder = () => {
    const newFolder = {
      folderName: `FolderName ${folders.length + 1}`,
      folderDescription: "Nova Pasta",
      color: colors[colorIndex],
    };

    setColorIndex((colorIndex + 1) % colors.length);
    setFolders((prevFolders) => [...prevFolders, newFolder]);
  };

  return (
    <View style={[{ height: height, width: width }, styles.pag]}>
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
          <Pressable
            onPress={() =>
              navigation.navigate("FilesScreen", {
                folderName: "EIN7_T1",
              })
            }
            style={styles.folderView}
          >
            <Folder
              folderName="EIN7_T1"
              folderDescription="Dezembro 20.2020"
              color="#EEF7FE"
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.folderView}>
            <Folder
              folderName="FolderName"
              folderDescription="Dezembro 20.2020"
              color="#FFFBEC"
            />
          </Pressable>
        </View>
        <View style={styles.folderViewContainer}>
          <Pressable onPress={() => {}} style={styles.folderView}>
            <Folder
              folderName="FolderName"
              folderDescription="Dezembro 20.2020"
              color="#FEEEEE"
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.folderView}>
            <Folder
              folderName="FolderName"
              folderDescription="Dezembro 20.2020"
              color="#F0FFFF"
            />
          </Pressable>
        </View>

        <View style={styles.folderViewContainer}>
          <Pressable onPress={() => {}} style={styles.folderView}>
            <Folder
              folderName="FolderName"
              folderDescription="Dezembro 20.2020"
              color="#FFFBEC"
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.folderView}>
            <Folder
              folderName="FolderName"
              folderDescription="Dezembro 20.2020"
              color="#EEF7FE"
            />
          </Pressable>
        </View>

        <View style={styles.folderViewContainer}>
          <Pressable onPress={() => {}} style={styles.folderView}>
            <Folder
              folderName="FolderName"
              folderDescription="Dezembro 20.2020"
              color="#F0FFFF"
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.folderView}>
            <Folder
              folderName="FolderName"
              folderDescription="Dezembro 20.2020"
              color="#FEEEEE"
            />
          </Pressable>
        </View>
      </ScrollView>
      <AddButton />
    </View>
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
    gap: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  folderView: {
    flex: 1,
    flexDirection: "row"
  }})

  