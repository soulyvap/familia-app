import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import Firebase from "../config/firebase";

const MainContext = React.createContext({});

const MainProvider = (props) => {
  const [update, setUpdate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [showNews, setShowNews] = useState(true);
  const [offline, setOffline] = useState(true);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    checkOffline();
  }, []);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(undefined);
      }
    });
  });

  const checkOffline = async () => {
    try {
      const status = await AsyncStorage.getItem("offline");
      setOffline(status == "true");
    } catch (error) {
      console.error("checkOffline", error);
    }
  };

  // const checkUser = () => {
  //   const user = Firebase.auth().currentUser;
  //   console.log(user);
  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // };

  return (
    <MainContext.Provider
      value={{
        update,
        setUpdate,
        loading,
        setLoading,
        showPop,
        setShowPop,
        offline,
        setOffline,
        currentUser,
        setCurrentUser,
        showNews,
        setShowNews,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
