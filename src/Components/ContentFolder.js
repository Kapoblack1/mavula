import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";

const ContentFolder = ({
  value,
  color,
  subFolder,
  folderName,
  placeholder,
  uploadFile,
  onChangeText,
  deleteFolder,
  renameFolder,
  isForCreation,
  folderDescription,
  setShowUploadModal,
}) => {
  let folder, dot, cor;
  const [toggleFolderOptions, setToggleFolderOptions] = useState(false);

  const toggleOptions = () => {
    setToggleFolderOptions(!toggleFolderOptions);
  };

  if (color === "#EEF7FE") {
    folder = require("../../assets/folderBlue.png");
    dot = require("../../assets/dotBlue.png");
    cor = "#567DF4";
  } else {
    if (color === "#FFFBEC") {
      folder = require("../../assets/folderYellow.png");
      dot = require("../../assets/dotYellow.png");
      cor = "#F3C939";
    } else {
      if (color === "#FEEEEE") {
        folder = require("../../assets/folderRed.png");
        dot = require("../../assets/dotRed.png");
        cor = "#F45656";
      } else {
        folder = require("../../assets/folderCian.png");
        dot = require("../../assets/dotCian.png");
        cor = "#34DEDE";
      }
    }
  }

  return (
    <>
      <View style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.header}>
          <Image source={folder} style={styles.folderImage} />
          {!isForCreation && (
            <Pressable
              style={{
                right: -15,
                padding: 20,
                position: "absolute",
              }}
              onPress={toggleOptions}
            >
              <Image source={dot} />
            </Pressable>
          )}
        </View>
        <View style={styles.textContainer}>
          {isForCreation ? (
            <TextInput
              value={value}
              placeholder={placeholder}
              onChangeText={onChangeText}
              style={[styles.title, { color: cor }]}
            />
          ) : (
            <Text style={[styles.title, { color: cor }]}>{folderName}</Text>
          )}
          <Text style={[styles.description, { color: cor }]}>
            {isForCreation ? "Agora" : folderDescription}
          </Text>
        </View>
      </View>
      {toggleFolderOptions && (
        <View style={styles.folderOptions}>
          <Pressable onPress={setShowUploadModal}>
            <Text style={styles.folderOptionsText}>Carregar ficheiros</Text>
          </Pressable>
          <Pressable onPress={toggleOptions}>
            <Text style={styles.folderOptionsText}>Criar subpasta</Text>
          </Pressable>
          <Pressable onPress={toggleOptions}>
            <Text style={styles.folderOptionsText}>Renomear</Text>
          </Pressable>
          <Pressable onPress={deleteFolder}>
            <Text style={styles.folderOptionsText}>Remover</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default ContentFolder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    zIndex: -1,
    marginLeft: "0%",
    borderRadius: 15,
    paddingBottom: 20,
    marginBottom: "4%",
    paddingVertical: 12,
    position: "relative",
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    marginTop: 8, // Adiciona um espaçamento entre o ícone e o texto
  },
  title: {
    fontWeight: "bold",
    //fontSize: 13,
    //color: colors.primary,
  },
  description: {
    fontSize: 11,
    //color: colors.primary,
  },
  folderImage: {
    marginRight: 20,
  },
  folderOptions: {
    gap: 10,
    right: 0,
    zIndex: 3,
    elevation: 5,
    shadowRadius: 4,
    marginTop: "35%",
    borderRadius: 10,
    shadowOpacity: 0.3,
    paddingVertical: 20,
    shadowColor: "#000",
    position: "absolute",
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 2 },
  },
  folderOptionsText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
  },
});
