import { View, Text, Button, Alert, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { FIREBASE_STORAGE } from '../../FirebaseConfig';

const DocumentViewerScreen  = () => {
  const [wordFiles, setWordFiles] = useState([]);

  useEffect(() => {
    const fetchWordFiles = async () => {
      try {
        const storageRef = ref(FIREBASE_STORAGE, 'word');
        const filesList = await listAll(storageRef);
        const filesPromises = filesList.items.map(async (fileRef) => {
          const downloadURL = await getDownloadURL(fileRef);
          return {
            name: fileRef.name,
            downloadURL,
          };
        });
        const filesData = await Promise.all(filesPromises);
        setWordFiles(filesData);
      } catch (error) {
        console.error('Error fetching Word files:', error);
      }
    };

    fetchWordFiles();
  }, []);

  const openUrl = (url) => {
    Linking.openURL(url);
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
        Word Files List
      </Text>
      <View style={{ marginHorizontal: 40 }}>
        {wordFiles.map((file, index) => (
          <View key={index}>
            <Text>{file.name}</Text>
            <Button title="Open" onPress={() => openUrl(file.downloadURL)} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default DocumentViewerScreen ;
//DocumentViewerScreen