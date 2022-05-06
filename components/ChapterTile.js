import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  HStack,
  Image,
  PresenceTransition,
  Pressable,
  Text,
  View,
  VStack,
} from "native-base";
import { colors } from "../utils/colors";
import { constants } from "../variables/constants";
import { Chapter1 } from "../variables/chapters";
import { Animated } from "react-native-web";

const ChapterTile = ({
  navigation,
  image,
  text,
  index,
  expanded,
  setExpandedItem,
}) => {
  return (
    <Pressable onPress={() => setExpandedItem(index)}>
      <VStack
        bgColor={colors.notWhite}
        borderRadius={8}
        shadow="6"
        p={2}
        mx={constants.stdMargin}
        mb={3}
        mt={2}
        space={1}
      >
        <HStack space={6} alignItems={"center"}>
          <Image
            source={image}
            alt="chapter-image"
            style={{ aspectRatio: 1, height: 90, width: undefined }}
          />
          <Text flex={1} fontWeight={"bold"} color={colors.green}>
            {text}
          </Text>
        </HStack>

        {expanded && (
          <PresenceTransition
            visible={expanded}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 250,
              },
            }}
          >
            <VStack px={5} space={3} alignItems={"center"}>
              <Text textAlign={"justify"}>
                This chapter goes through the different stages involved in an
                intercultural relationship: from falling in love to adjustment,
                and finally love.
              </Text>
              <Button
                variant={"green"}
                w={"50%"}
                mb={3}
                onPress={() =>
                  navigation.navigate("Chapter", { chapter: Chapter1 })
                }
              >
                Open chapter
              </Button>
            </VStack>
          </PresenceTransition>
        )}
      </VStack>
    </Pressable>
  );
};

export default ChapterTile;
