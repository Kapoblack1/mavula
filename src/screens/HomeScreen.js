import React, { useState, useEffect } from "react";
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
import ActionButton from "../Components/Action-Button";
import OutsidePressHandler from "react-native-outside-press";
import { FOLDERS } from "../mocks/folders";
import UploadModal from "../Components/Upload-Modal";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import {
  FIREBASE_AUTH,
  FIREBASE_DB,
  FIREBASE_STORAGE,
} from "../../FirebaseConfig";
import { PlusSVG } from "../Components/svg";

const menuIcon = require("../../assets/menu.png");
const arrow = require("../../assets/arrowdown.png");
const filtro = require("../../assets/filtro.png");

const HomeScreen = ({ onClosePress }) => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const [colorIndex, setColorIndex] = useState(0);
  const [folders, setFolders] = useState([]);
  const [newFolder, setNewFolder] = useState("");
  const colors = ["#EEF7FE", "#FFFBEC", "#FEEEEE", "#F0FFFF"];

  const [creationFolder, setCreationFolder] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const userId = FIREBASE_AUTH.currentUser?.uid; // Assuming FIREBASE_AUTH is correctly imported

  // Fetch folders from Firestore
  useEffect(() => {
    const fetchFolders = async () => {
      const q = query(
        collection(FIREBASE_DB, "folders"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      const foldersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFolders(foldersData);
    };

    fetchFolders();
  }, [folders]);

  // Add folder to Firestore
  const addFolderToFirestore = async () => {
    if (newFolder.trim() !== "") {
      const newFolderData = {
        name: newFolder,
        color: colors[colorIndex],
        completed: false,
        description: "Agora mesmo",
        userId: userId,
      };
      const docRef = await addDoc(
        collection(FIREBASE_DB, "folders"),
        newFolderData
      );

      console.log("New folder ID:", docRef.id);

      setColorIndex((colorIndex + 1) % colors.length);
      setNewFolder("");
    }
  };

  const navigateToFilesScreen = (folderId, folderName) => {
    navigation.navigate("FilesScreen", { folderId, folderName });
    console.log("folderId", folderId, "folderName", folderName);
  };

  deleteFolderAndFiles = async (folderId) => {
    // Delete all files in the folder from Firebase Storage
    try {
      const folderRef = ref(FIREBASE_STORAGE, `folders/${folderId}/files`);
      const filesList = await listAll(folderRef);
      await Promise.all(
        filesList.items.map((fileRef) => deleteObject(fileRef))
      );
    } catch (error) {
      console.error("Error deleting files:", error);
      throw error; // Optional: rethrow the error if you want to handle it outside
    }

    // Delete the folder from Firestore
    try {
       
      await deleteDoc(doc(FIREBASE_DB, "folders", folderId));
    } catch (error) {
      console.error("Error deleting folder:", error);
      throw error; // Optional: rethrow the error if you want to handle it outside
    }
  };

  const handleClose = () => setShowUploadModal(false);

  const handleFolderSelect = (folderId) => {
    setSelectedFolderId(folderId);
    setShowUploadModal(true);
  };

  return (
    <>
      <Pressable
        onPress={() => {
          addFolderToFirestore();
          setCreationFolder(false);
        }}
        style={[
          { backgroundColor: "#FFF", height: height, width: width },
          styles.pag,
        ]}
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
            {folders.length === 0 && !creationFolder && (
              <Text style={{ textAlign: "center", marginTop: 20 }}>
                Você ainda não possui pastas
              </Text>
            )}
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
                key={folder.id}
                onPress={() => handleFolderSelect(folder.id)}
                style={styles.folderView}
              >
                <Folder
                  color={folder.color}
                  folderId={folder.id}
                  folderName={folder.name}
                  folderDescription={folder.description}
                  setShowUploadModal={setShowUploadModal}
                  deleteFolder={() => deleteFolderAndFiles(folder.id)}
                  navigateToFilesScreen={() =>
                    navigateToFilesScreen(folder.id, folder.name)
                  }
                />
              </Pressable>
            ))}
          </View>
        </ScrollView>
        <ActionButton
          onPress={() => setCreationFolder(!creationFolder)}
          isPressed={creationFolder}
          Icon={PlusSVG}
        />
      </Pressable>
      {showUploadModal && (
        <UploadModal folderId={selectedFolderId} handleClose={handleClose} />
      )}
    </>
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
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "rgba(184, 184, 184, 0.6)",
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
    position: "relative",
    flexDirection: "row",
  },
});
