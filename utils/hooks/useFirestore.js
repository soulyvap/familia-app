import React, { useContext, useEffect, useState } from "react";
import Firebase from "../../config/firebase";
import { MainContext } from "../../contexts/MainContext";

const db = Firebase.firestore();

export const useFirestore = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const fetchedNews = await db
        .collection("news")
        .orderBy("date", "desc")
        .get();

      let newsData = [];
      fetchedNews.forEach((snapshot) => {
        const data = snapshot.data();
        newsData.push(data);
      });
      setNews(newsData);
    } catch (error) {
      console.error("getNews", error);
    }
  };

  const createUser = async (currentUser, username, phone) => {
    try {
      await db.collection("users").doc(currentUser.uid).set({
        email: currentUser.email,
        username: username,
        phone: phone,
      });
    } catch (error) {
      console.error("createUser", error);
    }
  };

  const addPollData = async (currentUser, pollData) => {
    try {
      await db
        .collection("users")
        .doc(currentUser.uid)
        .update({ polldata: pollData });
    } catch (error) {
      console.error("addPollData", error);
    }
  };

  return {
    createUser,
    addPollData,
    news,
  };
};
