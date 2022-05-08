import React from "react";
import { Box, FlatList, Pressable, Text, View, VStack } from "native-base";
import { colors } from "../utils/colors";
import { constants } from "../variables/constants";

const PollList = ({ answers, selected, setSelected }) => {
  const renderItem = ({ item, index }) => (
    <Pressable
      onPress={() => {
        setSelected(item);
      }}
    >
      <Box
        bgColor={item == selected ? colors.fuksi : colors.notWhite}
        borderRadius={8}
        shadow={"4"}
        my={2}
        py={4}
        mx={constants.stdMargin}
      >
        <Text textAlign={"center"}>{item}</Text>
      </Box>
    </Pressable>
  );

  return (
    <VStack>
      <FlatList
        keyExtractor={(item, index) => item + index}
        data={answers}
        renderItem={renderItem}
      />
    </VStack>
  );
};

export default PollList;
