import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { FIREBASE_STORAGE } from "../../FirebaseConfig";

const useGetFiles = (fileTypeFilter = "all") => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const storageRef = ref(FIREBASE_STORAGE, "files");
        const filesList = await listAll(storageRef);

        const validExtensions = {
          word: [".docx", ".doc"],
          pdf: [".pdf"],
          excel: [".xlsx", ".xls", ".csv"],
        };

        const filteredFiles =
          fileTypeFilter === "all"
            ? filesList.items
            : filesList.items.filter((fileRef) =>
                validExtensions[fileTypeFilter].some((ext) =>
                  fileRef.name.toLowerCase().endsWith(ext)
                )
              );

        const filesPromises = filteredFiles.map(async (fileRef) => {
          const downloadURL = await getDownloadURL(fileRef);
          return {
            downloadURL,
            size: fileRef.size,
            name: fileRef.name,
            date: fileRef.timeCreated,
            fileType: fileRef.contentType,
          };
        });

        const filesData = await Promise.all(filesPromises);
        setFiles(filesData);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, [fileTypeFilter]);

  return files;
};

export default useGetFiles;
