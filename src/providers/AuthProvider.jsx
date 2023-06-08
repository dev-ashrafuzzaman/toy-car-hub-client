import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import authApp from "../firebase/Firebase.config";


export const AuthContext = createContext();
const auth = getAuth(authApp);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [lodding, setLodding] = useState(true);

  //   Create User with Email & Password
  async function createAccountWithEmailAndPassword(email, password, name, photoURL) {
    setLodding(true);
    try {
      // Create the user account using email and password
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
  
      // Update the user's display name and photoURL
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL
      });
  
      // Return the user object
      return user;
    } catch (error) {
      console.error('Error creating account:', error);
      throw error;
    }
  }
  


  // Sign with Google PopUp
  const userSignWithGoogle = () => {
    setLodding(true);
    return signInWithPopup(auth, provider);
  };

  // Login User with Email & Password
  const signInUser = (email, password) => {
    setLodding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

//   Log out User
  const userLogOut = () => {
    setLodding(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLodding(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  
  const AuthInfo = {
    user,
    lodding,
    createAccountWithEmailAndPassword,
    userSignWithGoogle,
    signInUser,
    userLogOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
