import { ChevronRightIcon, HStack, Pressable, Text, View } from "native-base";
import React from "react";
import { colors } from "../utils/colors";
import { constants } from "../variables/constants";

const NoteTile = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <HStack
        alignItems={"center"}
        my={2}
        py={4}
        pl={5}
        pr={2}
        borderRadius={8}
        shadow="5"
        mx={constants.stdMargin}
        bgColor="white"
      >
        <Text flex={1} bgColor={colors.notBlack}>
          {title}
        </Text>
        <ChevronRightIcon flex={0.1} />
      </HStack>
    </Pressable>
  );
};

export default NoteTile;
