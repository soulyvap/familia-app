import React, { useState } from "react";
import { View } from "native-base";
import ChapterList from "../../components/ChapterList";
import Menu from "../../components/Menu";
import ViewHeading from "../../components/ViewHeading";

const Home = ({ navigation }) => {
  const [showMenu, setShowMenu] = useState(false);
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
