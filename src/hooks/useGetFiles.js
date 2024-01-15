import {
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  deleteObject,
} from "firebase/storage";
import { useState, useEffect } from "react";
import { FIREBASE_STORAGE } from "../../FirebaseConfig";

const useGetFiles = (folderId) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const folderRef = ref(FIREBASE_STORAGE, `folders/${folderId}/files`);
      const filesList = await listAll(folderRef);

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
    } catch (error) {
      console.error("Error fetching files:", error);
    }
    setLoading(false);
  };

  const getFileExtension = (filename) =>
    filename.split(".").pop().toLowerCase();

  useEffect(() => {
    if (folderId) {
      fetchFiles();
    }
  }, [folderId]);

  return { files, loading, fetchFiles };
};

export default useGetFiles;
