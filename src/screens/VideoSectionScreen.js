import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  RefreshControl,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "../../FirebaseConfig";
import useGetVideos from "../hooks/useGetVideos";
import { useRefresh } from "../hooks";

const arrow = require("../../assets/arrowleft.png");
const menu = require("../../assets/menu1.png");

export default function VideoSectionScreen() {
  const { videos, loading: loadingVideos, refetch, error } = useGetVideos(); // Updated to use useGetVideos hook
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { refreshing, onRefresh } = useRefresh(refetch);
  if (loading) {
    return <Text>Loading videos...</Text>; // Or any other loading indicator
  }

  const formatVideoSize = (sizeInBytes) => {
    const KB = sizeInBytes / 1024;
    const MB = KB / 1024;

    if (MB >= 1) {
      return `${MB.toFixed(2)} MB`;
    } else {
      return `${KB.toFixed(2)} KB`;
    }
  };

  return (
    <ScrollView
      style={styles.pag}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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

      {videos.map((video, index) => (
        <Pressable
          key={index}
          onPress={() =>
            navigation.navigate("VideoReproductionScreen", {
              views: video.views,
              videoName: video.name,
              videoSize: video.size,
              videoTime: video.time,
              videoUrl: video.url,
              videoGenre: video.genre,
              videoThumbnail: video.thumbnail,
              videoDescription: video.description,
            })
          }
        >
          <View style={styles.videoContainer}>
            <Image
              source={{ uri: video.thumbnail }}
              resizeMode="contain"
              style={styles.videoStyle}
            />
            <View style={styles.videoInfoContainer}>
              <Text style={styles.minhaConta}>{video.name}</Text>
              {/*<Text style={styles.minhaConta}>{video.time}</Text>*/}
              <Text style={styles.minhaConta}>
                {formatVideoSize(video.size)}
              </Text>
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