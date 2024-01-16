import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
  Alert,
} from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { PdfSVG, TimesSVG } from "../svg";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FIREBASE_STORAGE } from "../../../FirebaseConfig";

const UploadModal = ({ folderId, handleClose, refetch }) => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  console.log("Folder ID Received:", folderId);

  const uploadFile = async (document) => {
    try {
      if (!folderId) {
        console.error("Folder ID is undefined.");
        return;
      }

      let storageRef = ref(
        FIREBASE_STORAGE,
        `folders/${folderId}/files/${document.name}`
      );

      const response = await fetch(document.uri);
      const blob = await response.blob();

      await uploadBytes(storageRef, blob);

      // Obter o URL de download
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File uploaded successfully. Download URL:", downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
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
    } catch (err) {
      console.error("Error picking document:", err);
    }
  };

  const verifyFileSize = (file) => {
    if (file.size > 3020000) {
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

    if (selectedDocuments && selectedDocuments.length > 0) {
      for (const document of selectedDocuments) {
        if (verifyFileSize(document)) {
          await uploadFile(document);
        }
      }
      refetch();
      Alert.alert(
        "Upload Successful",
        "Files have been uploaded successfully."
      );
    } else {
      Alert.alert("No File Selected", "Please select a file to upload.");
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
