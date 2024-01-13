import { View, Text, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FIREBASE_STORAGE } from '../../FirebaseConfig';

const UploadScreen = () => {
  const [selectedExcelDocuments, setSelectedExcelDocuments] = useState([]);
  const [selectedPdfDocuments, setSelectedPdfDocuments] = useState([]);
  const [selectedWordDocuments, setSelectedWordDocuments] = useState([]);

  const uploadFile = async (document, fileType) => {
    try {
      const encodedName = encodeURIComponent(document.name);
      let storageRef;

      switch (fileType) {
        case 'excel':
          storageRef = ref(FIREBASE_STORAGE, `excels/${encodedName}`);
          break;
        case 'pdf':
          storageRef = ref(FIREBASE_STORAGE, `pdfs/${encodedName}`);
          break;
        case 'word':
          storageRef = ref(FIREBASE_STORAGE, `word/${encodedName}`);
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

      console.log('File uploaded successfully. Download URL:', downloadURL);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const selectDoc = async (fileType, setDocuments) => {
    try {
      const docs = await DocumentPicker.getDocumentAsync({
        type: fileType,
        multiple: true,
      });

      console.log(`Selected ${fileType} Documents:`, docs);

      if (!docs.canceled) {
        setDocuments(docs.assets);
      } else {
        console.log(`User cancelled the ${fileType} upload`);
      }
    } catch (err) {
      console.error(`Error picking ${fileType} documents:`, err);
    }
  };

  const handleUpload = (fileType, selectedDocuments) => {
    if (selectedDocuments.length > 0) {
      selectedDocuments.forEach((document) => uploadFile(document, fileType));
    } else {
      Alert.alert('Error', `Please select at least one ${fileType} document.`);
    }
  };

  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          textAlign: 'center',
          marginVertical: 40,
        }}>
        Document Picker
      </Text>
      <View style={{ marginHorizontal: 40 }}>
        <Button title="Select Excel File" onPress={() => selectDoc('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', setSelectedExcelDocuments)} />
        {selectedExcelDocuments.map((document, index) => (
          <Text key={index}>{document.name}</Text>
        ))}
        <Button title="Upload Excel Files" onPress={() => handleUpload('excel', selectedExcelDocuments)} />

        <Button title="Select PDF File" onPress={() => selectDoc('application/pdf', setSelectedPdfDocuments)} />
        {selectedPdfDocuments.map((document, index) => (
          <Text key={index}>{document.name}</Text>
        ))}
        <Button title="Upload PDF Files" onPress={() => handleUpload('pdf', selectedPdfDocuments)} />

        <Button title="Select Word File" onPress={() => selectDoc('application/vnd.openxmlformats-officedocument.wordprocessingml.document', setSelectedWordDocuments)} />
        {selectedWordDocuments.map((document, index) => (
          <Text key={index}>{document.name}</Text>
        ))}
        <Button title="Upload Word Files" onPress={() => handleUpload('word', selectedWordDocuments)} />
      </View>
    </View>
  );
};

export default UploadScreen;
