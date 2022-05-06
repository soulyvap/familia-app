import { FlatList, View } from "native-base";
import React, { useState } from "react";
import { chapters } from "../variables/chapters";
import ChapterTile from "./ChapterTile";

const ChapterList = ({ navigation }) => {
  const [expandedItem, setExpandedItem] = useState();
  const renderItem = ({ item, index }) => (
    <ChapterTile
      navigation={navigation}
      image={item.image}
      text={item.title}
      index={index}
      expanded={expandedItem === index}
      setExpandedItem={setExpandedItem}
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
