import { useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "../../FirebaseConfig"; // Ensure this import points to your Firebase config file

const useGetVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const querySnapshot = await getDocs(collection(FIREBASE_DB, "videos"));
      const videosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(videosData);
      console.log("Fetched Videos:", videosData); // Debugging log
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  // Expose the fetchVideos function as refetch for manual refresh
  return { videos, loading, error, refetch: fetchVideos };
};

export default useGetVideos;
