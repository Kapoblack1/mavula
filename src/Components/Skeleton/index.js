import React from "react";
import { View, StyleSheet } from "react-native";

const Skeleton = ({ type, numberOfRows }) => {
  const skeletonItems = Array.from({ length: numberOfRows }, (_, index) => (
    <View key={index} style={styles.skeletonItem}>
      <View style={styles.skeletonIcon} />
      <View style={styles.informationsGroup}>
        <View style={styles.informationTop} />
        <View style={styles.informationBottom} />
      </View>
      <View />
      <View style={styles.informationSmaller} />
    </View>
  ));

  return <View style={styles.container}>{skeletonItems}</View>;
};

const styles = StyleSheet.create({
  container: {
    gap: 25,
    height: 100,
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  skeletonItem: {
    gap: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  skeletonIcon: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: "#E5E5E5",
  },
  informationsGroup: {
    flex: 6,
  },
  informationTop: {
    height: 15,
    width: "80%",
    borderRadius: 5,
    backgroundColor: "#E5E5E5",
  },
  informationBottom: {
    height: 13,
    width: "60%",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#E5E5E5",
  },
  informationSmaller: {
    flex: 1,
    height: 13,
    borderRadius: 5,
    backgroundColor: "#E5E5E5",
  },
});

export default Skeleton;
