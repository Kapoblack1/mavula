import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
  Alert,
  Button,
} from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import {
  AudioSVG,
  CancelSVG,
  ExcelSVG,
  ImageSVG,
  PdfSVG,
  PlusSVG,
  TimesSVG,
  UploadSVG,
  VideoSVG,
  WordSVG,
} from "../svg";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FIREBASE_STORAGE } from "../../../FirebaseConfig";
const UploadModal = ({ onPress, isPressed, handleClose, folderId }) => {
  const width = useWindowDimensions().width;
  const [selectedExcelDocuments, setSelectedExcelDocuments] = useState([]);
  const [selectedPdfDocuments, setSelectedPdfDocuments] = useState([]);
  const [selectedWordDocuments, setSelectedWordDocuments] = useState([]);
  const [selectedVideoDocuments, setSelectedVideoDocuments] = useState([]);

  const uploadFile = async (document, fileType, folderId) => {
    try {
      let storageRef;

      switch (fileType) {
        case "excel":
          storageRef = ref(FIREBASE_STORAGE, `files/${document.name}`);
          break;
        case "pdf":
          storageRef = ref(FIREBASE_STORAGE, `files/${document.name}`);
          break;
        case "word":
          storageRef = ref(FIREBASE_STORAGE, `files/${document.name}`);
          break;
        default:
          // Handle other file types if needed
          break;
      }

      const response = await fetch(document.uri);
      const blob = await response.blob();
  
      await uploadBytes(storageRef, blob);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File uploaded successfully. Download URL:", downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  

  const selectDoc = async (fileType, setDocuments) => {
    try {
      let type;
      switch (fileType) {
        case 'excel':
          type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          break;
        case 'pdf':
          type = 'application/pdf';
          break;
        case 'word':
          type = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          break;
        case 'video':
          type = 'video/*';
          break;
        default:
          type = '*/*'; // ou um tipo de arquivo específico
      }
  
      const result = await DocumentPicker.getDocumentAsync({
        type: type,
        multiple: true,
      });
  
      if (!result.canceled) {
        console.log(`Selected ${fileType} Documents:`, result);
        setDocuments(result.assets || [result]); // Certifique-se de que isso funciona para todos os tipos de arquivos
      } else {
        console.log(`User cancelled the ${fileType} upload`);
      }
    } catch (err) {
      console.error(`Error picking ${fileType} documents:`, err);
    }
  };
  
  const verifyFileSize = (file) => {
    if (file.size > 420000) {
      Alert.alert(
        "Ficheiro demasiado grande",
        `O ficheiro ${file.name} é demasiado grande. Por favor carregue um ficheiro com temanho menor à 420000 bytes.`
      );
      return false;
    }
    return true;
  };

  const handleUpload = (fileType, selectedDocuments, folderId) => {
    if (
      selectedDocuments.length > 0 &&
      !selectedDocuments.some((document) => !verifyFileSize(document))
    ) {
      selectedDocuments.forEach((document) =>
        uploadFile(document, fileType, folderId)
      );
      Alert.alert(
        "Ficheiro carregado com sucesso",
        `O ficheiro ${selectedDocuments[0].name} foi carregado com sucesso.`
      );
      console.log("ID::::::::", folderId);
      setSelectedExcelDocuments([]);
      setSelectedPdfDocuments([]);
      setSelectedWordDocuments([]);
    } else if (selectedDocuments.length === 0) {
      Alert.alert(
        "Selecione um ficheiro",
        `Nenhum ficheiro foi selecionado, por favor selecione um!.`
      );
    }
    if (fileType === 'video') {
      selectedDocuments.forEach((document) => {
        if (verifyFileSize(document)) {
          uploadFile(document, 'video');
        }
      });
    }
  };

  return (
    <>
      <OutsidePressHandler
        onOutsidePress={handleClose}
        style={[{ width: width }, styles.modalContainer]}
      >
        <View style={styles.modal}>
          <View style={styles.closeBtn}>
            <Pressable onPress={handleClose}>
              <TimesSVG maxWidth={60} maxHeight={60} width="100%" />
            </Pressable>
          </View>
          <Pressable
            style={styles.fileContainer}
            onPress={() => {
              selectDoc("application/pdf", setSelectedPdfDocuments);
            }}
          >
            <PdfSVG maxWidth={65} maxHeight={65} width="100%" />
            <Text style={styles.fileText}>PDF</Text>
          </Pressable>
          <Pressable
            style={styles.fileContainer}
            onPress={() =>
              selectDoc(
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                setSelectedWordDocuments
              )
            }
          >
            <WordSVG maxWidth={65} maxHeight={65} width="100%" />
            <Text style={styles.fileText}>Word</Text>
          </Pressable>
          <Pressable
            style={styles.fileContainer}
            onPress={() =>
              selectDoc(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                setSelectedExcelDocuments
              )
            }
          >
            <ExcelSVG maxWidth={65} maxHeight={65} width="100%" />
            <Text style={styles.fileText}>Excel</Text>
          </Pressable>
          <Pressable
            style={styles.fileContainer}
            onPress={() => {
              selectDoc('video', setSelectedVideoDocuments);
            }}
          >
            <VideoSVG maxWidth={65} maxHeight={65} width="100%" />
            <Text style={styles.fileText}>Vídeo</Text>
          </Pressable>
          <View style={styles.fileContainer}>
            <AudioSVG maxWidth={65} maxHeight={65} width="100%" />
            <Text style={styles.fileText}>Audio</Text>
          </View>
          <View style={styles.fileContainer}>
            <ImageSVG maxWidth={65} maxHeight={65} width="100%" />
            <Text style={styles.fileText}>Imagem</Text>
          </View>
          <Pressable
            onPress={() => {
              handleUpload(
                "pdf" || "excel" || "word",
                selectedPdfDocuments ||
                  selectedExcelDocuments ||
                  selectedWordDocuments
              );
            }}
            style={[
              styles.button,
              {
                backgroundColor: selectedPdfDocuments ? "#567DF4" : "#C4C4C4",
              },
            ]}
          >
            <Text style={styles.textButton}>
              Carregar ficheiro
              {selectedPdfDocuments.length > 1 ||
              selectedExcelDocuments.length > 1 ||
              selectedWordDocuments.length > 1
                ? "s"
                : ""}
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
    position: "absolute",
    bottom: 40,
    right: 40,
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
