import React, { useContext, useEffect } from "react";
import Firebase from "../../config/firebase";
import { MainContext } from "../../contexts/MainContext";
import { useFirestore } from "./useFirestore";

const auth = Firebase.auth();

export const useAuthentication = () => {
  const { setCurrentUser } = useContext(MainContext);
  const { createUser } = useFirestore();

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (email, password, username, phone) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const currentUser = auth.currentUser;
      setCurrentUser(currentUser);
      await createUser(currentUser, username, phone);
    } catch (error) {
      console.error(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      const currentUser = auth.currentUser;
      setCurrentUser(currentUser);
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    signOut,
    register,
    login,
  };
};
