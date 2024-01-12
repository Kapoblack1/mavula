import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ArrowLeftSVG, DotsSVG } from "../Components/svg";

const VideoReproductionScreen = ({ route }) => {
  const navigation = useNavigation();
  const [toggleDescription, setToggleDescription] = useState(false);
  const { videoName, videoDescription, videoSize, videoTime } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeftSVG maxHeight={24} maxWidth={24} width="100%" />
        </Pressable>
        <Text style={styles.headerText}>Video</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <DotsSVG maxHeight={24} maxWidth={24} width="100%" />
        </Pressable>
      </View>
      <ScrollView style={styles.videoSection}>
        <View style={styles.video}></View>
        <View style={styles.videoInfo}>
          <Text style={styles.videoInfoText}>
            {videoDescription} - {videoName}
          </Text>
          <Text style={styles.videoInfoText}>1,3M de Visualizações</Text>
        </View>
        <View style={styles.videoDescription}>
          <Pressable onPress={() => setToggleDescription(!toggleDescription)}>
            <Text style={[styles.videoInfoText, { marginBottom: 20 }]}>
              Descrição
            </Text>
          </Pressable>
          {toggleDescription && (
            <Text style={styles.normalText}>{videoDescription}</Text>
          )}
        </View>
        <View style={styles.relatedVideos}>
          <Text style={styles.relatedVideosTitle}>Videos Relacionados</Text>
          <View style={styles.relatedVideosContainer}>
            <View style={styles.relatedVideosVideo}>
              <View style={styles.relatedVideoThumb}></View>
              <View style={styles.relatedVideosVideoInfoContainer}>
                <Text style={styles.relatedVideosVideoInfoText}>
                  {videoName}
                </Text>
                <Text style={styles.normalText}>{videoName}</Text>
              </View>
            </View>
            <View style={styles.relatedVideosVideo}>
              <View style={styles.relatedVideoThumb}></View>
              <View style={styles.relatedVideosVideoInfoContainer}>
                <Text style={styles.relatedVideosVideoInfoText}>
                  {videoName}
                </Text>
                <Text style={styles.normalText}>{videoName}</Text>
              </View>
            </View>
            <View style={styles.relatedVideosVideo}>
              <View style={styles.relatedVideoThumb}></View>
              <View style={styles.relatedVideosVideoInfoContainer}>
                <Text style={styles.relatedVideosVideoInfoText}>
                  {videoName}
                </Text>
                <Text style={styles.normalText}>{videoName}</Text>
              </View>
            </View>
            <View style={styles.relatedVideosVideo}>
              <View style={styles.relatedVideoThumb}></View>
              <View style={styles.relatedVideosVideoInfoContainer}>
                <Text style={styles.relatedVideosVideoInfoText}>
                  {videoName}
                </Text>
                <Text style={styles.normalText}>{videoName}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoReproductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
  },
  videoSection: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  video: {
    height: 230,
    width: "100%",
    backgroundColor: "#000",
  },
  videoInfo: {
    gap: 10,
    width: "100%",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#BAB5B5",
  },
  videoInfoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  videoDescription: {
    marginTop: 20,
    width: "100%",
    paddingBottom: 20,
  },
  relatedVideos: {
    marginTop: 20,
    width: "100%",
  },
  relatedVideosTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  relatedVideosContainer: {
    gap: 20,
    width: "100%",
    marginTop: 20,
    justifyContent: "space-between",
  },
  relatedVideosVideo: {
    width: "48%",
    flexDirection: "row",
    gap: 20,
  },
  relatedVideoThumb: {
    width: "100%",
    height: 140,
    backgroundColor: "#000",
  },
  relatedVideosVideoInfoContainer: {
    gap: 10,
    marginTop: 10,
    width: "100%",
  },
  relatedVideosVideoInfoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 16,
  },
});
