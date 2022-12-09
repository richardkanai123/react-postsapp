import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { auth } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";

const AuthContext = createContext();

export function useAuthHook() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState();

  function LogInWithGoogle(auth, provider) {
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
      return unSubscribe;
    }, []);
  });

  const value = { currentUser, LogInWithGoogle };

  return <AuthContext value={value}>{children}</AuthContext>;
};
