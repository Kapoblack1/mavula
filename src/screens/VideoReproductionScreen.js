import React, { useState, useEffect } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FirebaseConfig'; // Atualize para o caminho correto

const VideoReproductionScreen = ({ route, navigation }) => {
  const [isThumbnailVisible, setIsThumbnailVisible] = useState(true);
  const [toggleDescription, setToggleDescription] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const {
    views,
    videoUrl,
    videoName,
    videoTime,
    videoSize,
    videoGenre,
    videoThumbnail,
    videoDescription,
  } = route.params;

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      const q = query(
        collection(FIREBASE_DB, 'videos'),
        where('genre', '==', videoGenre),
      );

      try {
        const querySnapshot = await getDocs(q);
        const videos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Remover o vídeo atual da lista de vídeos relacionados
        const filteredVideos = videos.filter((video) => video.name !== videoName);

        setRelatedVideos(filteredVideos);
      } catch (error) {
        console.error('Error fetching related videos:', error);
      }
    };

    fetchRelatedVideos();
  }, [videoGenre, videoName]);

  const PlayButton = ({ onPress }) => {
    return (
      <Pressable onPress={onPress} style={styles.playButton}>
        <Text style={styles.playButtonText}>▶</Text>
      </Pressable>
    );
  };

  const handleVideoPress = (file) => {
    // Atualizar a rota com o novo vídeo
    navigation.replace('VideoReproductionScreen', {
      views: file.views,
      videoName: file.name,
      videoSize: file.size,
      videoTime: file.time,
      videoGenre: file.genre,
      videoThumbnail: file.thumbnail,
      videoDescription: file.description,
      videoUrl: file.url,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('VideoSectionScreen');
          }}
        >
          <Text>{'<'}</Text>
        </Pressable>
        <Text style={styles.headerText}>Video</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>{'...'}</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.videoSection}>
        <View style={styles.video}>
          <Video
            source={{ uri: videoUrl }}
            resizeMode="contain"
            style={{ flex: 1 }}
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={(status) =>
              setIsThumbnailVisible(!status.isPlaying)
            }
          />
          {isThumbnailVisible && (
            <>
              <Image
                source={{ uri: videoThumbnail }}
                style={StyleSheet.absoluteFillObject}
                resizeMode="cover"
              />
              <PlayButton onPress={() => setIsThumbnailVisible(false)} />
            </>
          )}
        </View>
        <View style={styles.videoInfo}>
          <Text style={styles.videoInfoText}>
            {videoGenre} - {videoName}
          </Text>
          <Text style={styles.videoInfoText}>{views} de Visualizações</Text>
        </View>
        <View style={styles.videoDescription}>
          <Pressable
            style={{ flexDirection: 'row', gap: 10 }}
            onPress={() => setToggleDescription(!toggleDescription)}
          >
            <Text style={[styles.videoInfoText, { marginBottom: 20 }]}>
              Descrição
            </Text>
            <Text>{'▼'}</Text>
          </Pressable>
          {toggleDescription && (
            <Text style={styles.normalText}>{videoDescription}</Text>
          )}
        </View>
        <View style={styles.relatedVideos}>
          <Text style={styles.relatedVideosTitle}>Videos Relacionados</Text>
          <View style={styles.relatedVideosContainer}>
            {relatedVideos.map((file, index) => (
              <Pressable
                key={index}
                onPress={() => handleVideoPress(file)}
              >
                <View style={styles.relatedVideosVideo}>
                  <View style={styles.relatedVideoThumb}>
                    <Image
                      source={{ uri: file.thumbnail }}
                      resizeMode="cover"
                      style={{ flex: 1 }}
                    />
                  </View>
                  <View style={styles.relatedVideosVideoInfoContainer}>
                    <Text style={styles.relatedVideosVideoInfoText}>
                      {file.name}
                    </Text>
                    <Text style={styles.normalText}>{file.description}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
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
    borderRadius: 5,
    overflow: "hidden",
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
    height: 140,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
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
  playButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  playButtonText: {
    fontSize: 60,
    color: 'white',
  },
});
