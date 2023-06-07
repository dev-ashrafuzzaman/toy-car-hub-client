import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import authApp from "../firebase/Firebase.config";


export const AuthContext = createContext();
const auth = getAuth(authApp);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [lodding, setLodding] = useState(true);

  //   Create User with Email & Password
  const createUser = (email, password) => {
    setLodding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

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
    createUser,
    userSignWithGoogle,
    signInUser,
    userLogOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
