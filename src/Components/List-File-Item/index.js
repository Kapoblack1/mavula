import { Image, Text, View, StyleSheet } from "react-native";

// const excel = require("../../../assets/Excel.png");

const ListFileItem = ({ name, ext, date, size }) => {
  const docx = require("../../../assets/Word.png");
  const pdf = require("../../../assets/pdf.png");
  const excel = require("../../../assets/excel.png");
  const video = require("../../../assets/video.png");

  const getExtension = (ext) => {
    if (ext === "docx") {
      return docx;
    } else if (ext === "pdf") {
      return pdf;
    } else if (ext === "xlsx" || ext === "xls" || ext === "csv") {
      return excel;
    } else if (name === "Playlist de Video Aulas" && !ext) {
      return video;
    }
  };

  return (
    <View style={styles.middleButtons}>
      <Image
        source={getExtension(ext)}
        resizeMode="stretch"
        style={styles.image}
      />
      <View>
        <Text style={styles.minhaConta}>
          {name}.{ext}
        </Text>
        <Text style={styles.data}>{date}</Text>
      </View>

      <Text style={styles.size}>{size}</Text>
    </View>
  );
};
export default ListFileItem;

const styles = StyleSheet.create({
  minhaConta: {
    fontWeight: "bold",
  },
  middleButtons: {
    marginTop: 14,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginRight: 20,
    height: 35,
    width: 31,
  },
  data: {
    fontSize: 9,
  },
  size: {
    fontSize: 9,
    marginLeft: "auto",
  },
});
