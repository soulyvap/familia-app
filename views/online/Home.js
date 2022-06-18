import React, { useContext, useEffect, useState } from "react";
import { useToast, View } from "native-base";
import ChapterList from "../../components/ChapterList";
import Menu from "../../components/Menu";
import ViewHeading from "../../components/ViewHeading";
import Firebase from "../../config/firebase";
import { MainContext } from "../../contexts/MainContext";

const Home = ({ navigation }) => {
  const { currentUser, offline, setLoading } = useContext(MainContext);
  const [showMenu, setShowMenu] = useState(false);
  const [pollAnswered, setPollAnswered] = useState(undefined);

  const checkPoll = async () => {
    const db = Firebase.firestore();
    try {
      let doc = await db.collection("users").doc(currentUser.uid).get();

      console.log(doc.data().polldata);

      if (!doc.exists) {
        console.log("No user data found!");
      } else {
        if (doc.data().polldata) {
          setPollAnswered(true);
        } else {
          setPollAnswered(false);
        }
      }
    } catch (error) {
      console.error("checkPoll", error);
    }
  };

  useEffect(() => {
    setLoading(false);
    if (!offline) {
      checkPoll();
    }
  }, []);

  useEffect(() => {
    if (pollAnswered == false) {
      navigation.navigate("Polls");
    }
  }, [pollAnswered]);

  return (
    <View flex={1}>
      <ViewHeading text={"Familia ry"} />
      <ChapterList navigation={navigation} />

      <Menu
        navigation={navigation}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </View>
  );
};

export default Home;
