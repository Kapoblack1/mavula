import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { CancelSVG, PlusSVG, TimesSVG, UploadSVG } from "../svg";
import { useState } from "react";

const AddButton = ({ onPress, isPressed }) => {
  // const [modalVisible, setModalVisible] = useState(false);

  // const handleOpenUploadModal = () => !modalVisible && setModalVisible(true);
  // const handleCloseUploadModal = () => modalVisible && setModalVisible(false);

  // const width = useWindowDimensions().width;

  return (
    <>
      <View style={styles.plusIcon}>
        <Pressable onPress={onPress}>
          {isPressed ? (
            <CancelSVG maxWidth={70} maxHeight={70} width="100%" />
          ) : (
            <PlusSVG maxWidth={70} maxHeight={70} width="100%" />
          )}
        </Pressable>
      </View>
      {/* {modalVisible && (
        <OutsidePressHandler
          onOutsidePress={handleCloseUploadModal}
          style={[{ width: width }, styles.modalContainer]}
        >
          <View style={styles.modal}>
            <View style={styles.closeBtn}>
              <Pressable onPress={handleCloseUploadModal}>
                <TimesSVG maxWidth={60} maxHeight={60} width="100%" />
              </Pressable>
            </View>
            <View>
              <UploadSVG maxWidth={90} maxHeight={90} width="100%" />
            </View>
            <Text style={styles.text}>
              Toque para fazer upload de ficheiros
            </Text>
          </View>
        </OutsidePressHandler>
      )} */}
    </>
  );
};

export default AddButton;

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
    height: "35%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    width: "80%",
    color: "#567DF4",
    textAlign: "center",
  },
});
