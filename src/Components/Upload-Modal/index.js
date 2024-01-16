import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
  Alert,
  TextInput,
} from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { PdfSVG, TimesSVG } from "../svg";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { ref, uploadBytes, getDownloadURL, storageRef } from "firebase/storage";
import { FIREBASE_STORAGE } from "../../../FirebaseConfig";
import { FIREBASE_DB } from '../../../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


const UploadModal = ({ folderId, handleClose, refetch }) => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  console.log("Folder ID Received:", folderId);
  const [isVideo, setIsVideo] = useState(false);
  const [videoName, setVideoName] = useState("");
  const [videoGenre, setVideoGenre] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const uploadFile = async (document, isThumbnail = false) => {
    try {
      if (!folderId) {
        console.error("Folder ID is undefined.");
        return;
      }
  
      const fileRef = ref(FIREBASE_STORAGE, `folders/${folderId}/files/${document.name}`);
  
      const response = await fetch(document.uri);
      const blob = await response.blob();
  
      await uploadBytes(fileRef, blob);
  
      const downloadURL = await getDownloadURL(fileRef);
  
      return downloadURL; // Return the URL for both thumbnail and video
    } catch (error) {
      console.error("Error uploading file:", error);
      return null; // Return null if there is an error
    }
  };
  
  const saveVideoData = async (videoData) => {
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, 'videos'), videoData);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id; // Returning the document ID for any further use
    } catch (e) {
      console.error("Error adding document to Firestore: ", e);
      throw e; // Re-throw the error for calling function to handle
    }
  };


  const selectDoc = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        multiple: true,
      });

      if (!result.canceled) {
        console.log("Selected document:", result);
        setSelectedDocuments(result.assets || [result]); // Update the selectedDocuments state
      }
      if (!result.canceled) {
        const isVideoFile = result.assets.some((asset) =>
          asset.mimeType.startsWith("video/")
        );
        setIsVideo(isVideoFile);
        setSelectedDocuments(result.assets || [result]);
      }
    } catch (err) {
      console.error("Error picking document:", err);
    }
  };

  const verifyFileSize = (file) => {
    if (file.size > 302000000) {
      // 3020000 bytes = 2.88 MB
      Alert.alert(
        "Ficheiro demasiado grande",
        `O ficheiro ${file.name} é demasiado grande. Por favor carregue um ficheiro com temanho menor à 420000 bytes.`
      );
      return false;
    }
    return true;
  };

  const handleUpload = async () => {
    console.log("Selected documents for upload:", selectedDocuments); // Debug log
  
    let videoFileURL = "";
    let thumbnailURL = "";
  
    if (selectedDocuments && selectedDocuments.length > 0) {
      for (const document of selectedDocuments) {
        if (verifyFileSize(document)) {
          const isThumbnail = document === thumbnail; // Check if the current document is the thumbnail
          const uploadedURL = await uploadFile(document, isThumbnail);
  
          if (isThumbnail) {
            thumbnailURL = uploadedURL;
          } else if (isVideo) {
            videoFileURL = uploadedURL; // Save video file URL if it's a video
          }
        }
      }
    } else {
      Alert.alert("No File Selected", "Please select a file to upload.");
      return;
    }
  
    if (isVideo) {
      // Update video metadata with the video and thumbnail URLs
      const videoData = {
        name: videoName,
        genre: videoGenre,
        description: "Your video description here", // Replace with actual description
        fileURL: videoFileURL,
        thumbnailURL: thumbnailURL
      };
  
      await saveVideoData(videoData);
    }
  
    refetch();
    Alert.alert(
      "Upload Successful",
      "Files have been uploaded successfully."
    );
  };
  

  const selectThumbnail = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: "image/*" });
    if (!result.canceled) {
      setThumbnail(result.uri);
    }
  };
  return (
    <>
      <OutsidePressHandler
        onOutsidePress={handleClose}
        style={[{ width: width, height: height }, styles.modalContainer]}
      >
        <View style={styles.modal}>
          <View style={styles.closeBtn}>
            <Pressable onPress={handleClose}>
              <TimesSVG maxWidth={60} maxHeight={60} width="100%" />
            </Pressable>
          </View>
          <Pressable style={styles.fileContainer} onPress={selectDoc}>
            <PdfSVG maxWidth={65} maxHeight={65} width="100%" />
            <Text style={styles.fileText}>Select</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              handleUpload(selectedDocuments);
            }}
            style={[
              styles.button,
              {
                backgroundColor: selectedDocuments ? "#567DF4" : "#C4C4C4",
              },
            ]}
          >
            <Text style={styles.textButton}>
              Carregar ficheiro
              {selectedDocuments.length > 1 ? "s" : ""}
            </Text>
          </Pressable>
          {isVideo && (
            <View style={styles.videoInfoForm}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={videoName}
                onChangeText={setVideoName}
              />
              <TextInput
                style={styles.input}
                placeholder="Genre"
                value={videoGenre}
                onChangeText={setVideoGenre}
              />
              <Pressable onPress={selectThumbnail}>
                <Text>Select Thumbnail</Text>
              </Pressable>
            </View>
          )}
        </View>
      </OutsidePressHandler>
    </>
  );
};

export default UploadModal;

const styles = StyleSheet.create({
  plusIcon: {
    right: 40,
    bottom: 40,
    position: "absolute",
  },
  modalContainer: {
    left: 0,
    bottom: 0,
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modal: {
    gap: 30,
    flex: 1,
    width: "80%",
    height: "45%",
    paddingTop: 50,
    flexWrap: "wrap",
    borderRadius: 30,
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  fileContainer: {
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    width: "70%",
    color: "#567DF4",
    textAlign: "center",
  },
  fileText: {
    fontSize: 14,
    textAlign: "center",
    color: "#567DF4",
  },
  button: {
    // backgroundColor: "#567DF4",
    textAlign: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "70%",

    height: 40,
  },
  textButton: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
  },
});
