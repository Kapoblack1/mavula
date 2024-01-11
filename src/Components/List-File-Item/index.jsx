import { Image, Text, View, StyleSheet } from "react-native";

// const excel = require("../../../assets/Excel.png");

const ListFileItem = ({ name, ext, date, size }) => {
  const docx = require("../../../assets/Word.png");
  const pdf = require("../../../assets/pdf.png");
  const excel = require("../../../assets/excel.png");

  const getExtension = (ext) => {
    if (ext === "docx") {
      return docx;
    } else if (ext === "pdf") {
      return pdf;
    } else if (ext === "xlsx" || ext === "xls" || ext === "csv") {
      return excel;
    }
  };

  return (
    <View style={styles.middleButtons}>
      <Image source={getExtension(ext)} style={styles.middlebuttonStyle} />
      <View>
        <Text style={styles.minhaConta}>
          {name}.{ext}
        </Text>
        <Text style={styles.data}>{date}</Text>
      </View>

      <Text style={styles.data}>{size}</Text>
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
  middlebuttonStyle: {
    marginRight: 20,
  },
  data: {
    fontSize: 9,
    marginLeft: "auto",
  },
});
