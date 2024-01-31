import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Linking,
  RefreshControl,
  useWindowDimensions,
} from "react-native";
import ListFileItem from "../Components/List-File-Item";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useGetFiles, useRefresh } from "../hooks";
import Skeleton from "../Components/Skeleton";
import { getDownloadURL } from "@firebase/storage";
import ActionButton from "../Components/Action-Button";
import { DotsSVG } from "../Components/svg";
import UploadModal from "../Components/Upload-Modal";
import { useState } from "react";

const arrow = require("../../assets/arrowleft.png");
const menu = require("../../assets/menu1.png");
const arrangevertical = require("../../assets/arrangevertical.png");

const FilesScreen = ({ route }) => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const { folderId, folderName } = route.params; // Assuming folderId is passed in route params
  const { files, loading, refetch } = useGetFiles(folderId); // Updated to use folderId
  console.log("FILESSCREEN::::::", folderId, folderName);
  const openUrl = (url) => {
    if (!url) {
      console.error("URL not found for this file.");
      Linking.openURL(url);
      return;
    }
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open URL:", err);
      // Optionally, show an error message to the user
    });
  };

  const handleClose = () => setShowUploadModal(false);

  const { refreshing, onRefresh } = useRefresh(refetch);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={[styles.container1, { height: height, width: width }]}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrow} />
        </TouchableOpacity>
        <Text style={styles.minhaConta}>{folderName}</Text>
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
      <View style={styles.middleButtons}>
        <Text style={styles.minhaConta}>Carregamentos Recentes</Text>
        <Image source={arrangevertical} style={styles.middlebuttonStyle} />
      </View>
      {loading ? (
        <Skeleton numberOfRows={5} />
      ) : files.length === 0 ? (
        <View style={styles.descrView}>
          <Text style={styles.nome}>Nenhum arquivo encontrado</Text>
        </View>
      ) : (
        <>
          <Pressable onPress={() => navigation.navigate("VideoSectionScreen")}>
            <ListFileItem
              name="Playlist de Video Aulas"
              date="Novembro 22 , 2020"
              size="8GB"
            />
          </Pressable>
          {files.map((file, index) => (
            <Pressable key={index} onPress={() => openUrl(file.downloadURL)}>
              <ListFileItem
                key={index}
                name={file.name}
                ext={file.ext}
                date={file.date}
                size={file.size}
              />
            </Pressable>
          ))}
        </>
      )}
      <View style={{ position: "absolute", bottom: -300, right: 10 }}>
        <ActionButton onPress={() => setShowUploadModal(true)} Icon={DotsSVG} />
      </View>
      {showUploadModal && (
        <UploadModal
          refetch={refetch}
          folderId={folderId}
          handleClose={handleClose}
        />
      )}
    </ScrollView>
  );
};
export default FilesScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginLeft: 28,
    marginRight: 25,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  container1: {
    position: "relative",
    backgroundColor: "white",
    flex: 1,
  },
  menuStyle: {
    marginRight: 10,
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
  div: {
    flex: 1,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
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
  middleButtons: {
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "space-between",
  },
  mbView: {
    flexDirection: "row",
  },
  middlebuttonStyle: {
    marginRight: 20,
  },
  folderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginLeft: 26,
    marginRight: 26,
    marginTop: 14,
  },
  data: {
    fontSize: 9,
  },
});

