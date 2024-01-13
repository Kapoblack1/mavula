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
import { FILES } from "../mocks/files";

const arrow = require("../../assets/arrowleft.png");
const menu = require("../../assets/menu1.png");

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

      {FILES.filter((file) => file.ext === "mp4").map((file, index) => (
        <Pressable
          key={index}
          onPress={() =>
            navigation.navigate("VideoReproductionScreen", {
              views: file.views,
              videoName: file.name,
              videoSize: file.size,
              videoTime: file.time,
              videoGenre: file.genre,
              videoThumbnail: file.thumbnail,
              videoDescription: file.description,
            })
          }
        >
          <View style={styles.videoContainer}>
            <Image
              source={{ uri: file.thumbnail }}
              resizeMode="contain"
              style={styles.videoStyle}
            />
            <View style={styles.videoInfoContainer}>
              <Text style={styles.minhaConta}>{file.name}</Text>
              <Text style={styles.minhaConta}>{file.time}</Text>
              <Text style={styles.minhaConta}>{file.size}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  div: {
    marginBottom: 30,
    flexDirection: "row",
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
  container: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  menuStyle: {
    marginRight: 10,
  },
  videoStyle: {
    flex: 1,
    height: 110,
    marginRight: 10,
    borderRadius: 10,
  },
  videoContainer: {
    flexDirection: "row",
    borderBottomColor: "#BAB5B5",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  videoInfoContainer: {
    flex: 1,
    gap: 7,
    justifyContent: "center",
  },
  minhaConta: {
    fontWeight: "bold",
  },
  perfil: {
    backgroundColor: "#FFFFFF",
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 50,
    borderRadius: 5,
  },
  fotoDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 130,
    marginTop: 40,
    marginBottom: 10,
  },
  foto: {
    borderStyle: "solid",
    borderWidth: 1,
  },
  pro: {
    borderStyle: "solid",
    borderWidth: 1,
    marginRight: 8,
  },
  descrView: {
    alignItems: "center",
  },
  nome: {
    fontWeight: "bold",
    fontSize: 28,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  description: {
    textAlign: "center",
  },
  pag: {
    marginLeft: 28,
    marginRight: 15,
    flex: 1,
  },
});