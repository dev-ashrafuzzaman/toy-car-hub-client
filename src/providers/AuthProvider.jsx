import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import authApp from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(authApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodding, setLodding] = useState(true);

  //   Create User with Email & Password
  const createUser = (email, password) => {
    setLodding(true);
    return createUserWithEmailAndPassword(auth, email, password);
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
    signInUser,
    userLogOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
