import { View, StyleSheet, Pressable, Text } from "react-native";
import { CancelSVG } from "../svg";

const ActionButton = ({ onPress, isPressed, Icon }) => {
  return (
    <>
      <View style={styles.plusIcon}>
        <Pressable onPress={onPress}>
          {isPressed ? (
            <CancelSVG maxWidth={24} maxHeight={24} width="100%" />
          ) : (
            <Icon maxWidth={24} maxHeight={24} color="white" width="100%" />
          )}
        </Pressable>
      </View>
    </>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  plusIcon: {
    bottom: 40,
    right: 40,
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#22215B",
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
