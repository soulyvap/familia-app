import { FlatList, View } from "native-base";
import React from "react";
import { chapters } from "../variables/chapters";
import ChapterTile from "./ChapterTile";

const ChapterList = ({ navigation }) => {
  const renderItem = ({ item, index }) => (
    <ChapterTile
      navigation={navigation}
      image={item.image}
      text={item.title}
      index={index}
    />
  );

  return (
    <View flex={1}>
      <FlatList
        keyExtractor={(item, index) => item + index}
        data={chapters.tileInfo}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ChapterList;
