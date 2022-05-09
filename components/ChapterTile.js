import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  HStack,
  Image,
  PresenceTransition,
  Pressable,
  Progress,
  Text,
  View,
  VStack,
} from "native-base";
import { colors } from "../utils/colors";
import { constants } from "../variables/constants";
import { Chapter1 } from "../variables/chapters";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const ChapterTile = ({
  navigation,
  image,
  text,
  index,
  expanded,
  setExpandedItem,
}) => {
  const [progress, setProgress] = useState(0);

  const getProgress = async () => {
    try {
      const chapterProgress = await AsyncStorage.getItem(`chapter${index}`);
      if (chapterProgress) {
        setProgress(parseInt(chapterProgress));
        console.log(chapterProgress);
      }
    } catch (error) {
      console.error("getProgress", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getProgress();
    }, [])
  );

  return (
    <Pressable onPress={() => setExpandedItem(index)}>
      <VStack
        bgColor={colors.notWhite}
        borderRadius={8}
        shadow="6"
        pb={2}
        mx={constants.stdMargin}
        mb={3}
        mt={2}
        space={1}
      >
        <Progress
          bg={"gray.100"}
          _filledTrack={{
            bg: colors.fuksi,
          }}
          value={(progress / 6) * 100}
          size="sm"
          borderBottomRadius={"sm"}
        />
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
                  navigation.navigate("Chapter", {
                    chapter: Chapter1,
                    chapterIndex: index,
                    progress: progress,
                  })
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
