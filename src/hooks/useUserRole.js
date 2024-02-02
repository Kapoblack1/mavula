import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../../FirebaseConfig";

const useUserRole = (userId) => {
  const [role, setRole] = useState("");

  useEffect(() => {
    if (!userId) return;
    const userRef = doc(FIREBASE_DB, "users", userId);
    getDoc(userRef).then((docSnap) => {
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setRole(userData.role);
      } else {
        console.log("No user data found!");
      }
    });
  }, [userId]);

  return role;
};

export default useUserRole;
