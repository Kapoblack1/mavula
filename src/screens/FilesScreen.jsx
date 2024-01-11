import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { FILES } from "../mocks/files";
import ListFileItem from "../Components/List-File-Item";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const arrow = require("../../assets/arrowleft.png");
const menu = require("../../assets/menu1.png");
const arrangevertical = require("../../assets/arrangevertical.png");

const FilesScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.container}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image source={arrow} />
        </TouchableOpacity>
        <Text style={styles.minhaConta}>Minha Conta</Text>
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
      {FILES.map((file) => (
        <ListFileItem
          name={file.name}
          ext={file.ext}
          date={file.date}
          size={file.size}
        />
      ))}
    </ScrollView>
  );
};
export default FilesScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginLeft: 28,
    marginRight: 25,
    backgroundColor: "white",
  },
  container1: {
    backgroundColor: "white",
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
