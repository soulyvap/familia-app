import React, { useState } from "react";
import { HStack, Image, Pressable, Text, View } from "native-base";
import { colors } from "../utils/colors";
import { constants } from "../variables/constants";

const ChapterTile = ({ navigation, image, text, index }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Chapter")}>
      <HStack
        bgColor={colors.notWhite}
        borderRadius={8}
        shadow="6"
        alignItems={"center"}
        space={6}
        p={2}
        mx={constants.stdMargin}
        mb={3}
        mt={2}
      >
        <Image
          source={image}
          alt="chapter-image"
          style={{ aspectRatio: 1, height: 90, width: undefined }}
        />
        <Text flex={1} fontWeight={"bold"} color={colors.green}>
          {text}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default ChapterTile;
