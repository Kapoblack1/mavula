import { Image, Text, View, StyleSheet } from "react-native";
import { ExcelSVG, PdfSVG, VideoSVG, WordSVG } from "../svg";
import { formatFileSize } from "../../utils";

const ListFileItem = ({ name, ext, date, size }) => {
  const getExtension = (ext) => {
    if (ext === "docx") {
      return <WordSVG maxWidth={30} maxHeight={30} width="100%" />;
    } else if (ext === "pdf") {
      return <PdfSVG maxWidth={30} maxHeight={30} width="100%" />;
    } else if (ext === "xlsx" || ext === "xls" || ext === "csv") {
      return <ExcelSVG maxWidth={30} maxHeight={30} width="100%" />;
    } else if (name === "Playlist de Video Aulas" && !ext) {
      return <VideoSVG maxWidth={30} maxHeight={30} width="100%" />;
    } else if (ext === "mp4") {
      return <VideoSVG maxWidth={30} maxHeight={30} width="100%" />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemIcon}>{getExtension(ext)}</View>
      <View>
        <Text style={styles.fileName}>{name}</Text>
        <Text style={styles.data}>{date}</Text>
      </View>

      <Text style={styles.size}>{formatFileSize(size)}</Text>
    </View>
  );
};
export default ListFileItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  fileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemIcon: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEF7FE",
  },
  data: {
    fontSize: 12,
    marginTop: 5,
  },
  size: {
    fontSize: 12,
    marginLeft: "auto",
  },
});
