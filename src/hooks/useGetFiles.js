import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { useState, useEffect } from "react";
import { FIREBASE_STORAGE } from "../../FirebaseConfig";

const useGetFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    try {
      const storageRef = ref(FIREBASE_STORAGE, "files");
      const filesList = await listAll(storageRef);

      const filesPromises = filesList.items.map(async (fileRef) => {
        const downloadURL = await getDownloadURL(fileRef);
        const metadata = await getMetadata(fileRef);
        const extension = getFileExtension(fileRef.name);
        const size = metadata.size;
        const dateCreated = metadata.timeCreated;

        return {
          downloadURL,
          name: fileRef.name,
          ext: extension,
          size,
          date: dateCreated,
        };
      });

      const filesData = await Promise.all(filesPromises);
      setFiles(filesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching files:", error);
      setLoading(false);
    }
  };

  const getFileExtension = (filename) => {
    return filename.split(".").pop().toLowerCase();
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchFiles();
  };

  return { files, loading, refetch };
};

export default useGetFiles;
