import {
  FlatList,
  HStack,
  Modal,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { useFirestore } from "../utils/hooks/useFirestore";

const NewsPopUp = ({ isOpen, setShowPop }) => {
  const { news } = useFirestore();

  useEffect(() => {
    console.log(news);
  }, [news]);

  const renderItem = (item, index) => (
    <VStack space={5} py={5} key={index}>
      <HStack justifyContent={"space-between"}>
        <Text>{item.title}</Text>
        <Text>{item.date}</Text>
      </HStack>
      <Text>{item.text}</Text>
      {index != news.length - 1 ? <ItemDivider /> : null}
    </VStack>
  );

  const ItemDivider = () => {
    return <View h={0.2} w={"100%"} bgColor="black" />;
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setShowPop(false)}>
      <Modal.Content
        w={Dimensions.get("screen").width * 0.9}
        h={Dimensions.get("screen").height * 0.9}
      >
        <Modal.Header>News</Modal.Header>
        <Modal.Body p={"6"}>
          {news.map((item, index) => renderItem(item, index))}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default NewsPopUp;
