import { Button, Center, Image, Text, View, VStack } from "native-base";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { colors } from "../utils/colors";
import { sectionTypes } from "../variables/chapters";
import Quiz from "./Quiz";

const Page = ({ section, scrollToIndex, index, setCurrentPage }) => {
  const image = section.image;
  const title = section.title;
  const text = section.text;
  const type = section.type;
  const question = section.question;
  const answers = section.answers;
  const correct = section.correct;
  const h = Dimensions.get("window").height;
  const w = Dimensions.get("window").width;

  return (
    <View h={h} w={w} alignItems="center">
      <VStack
        h={"80%"}
        w={"90%"}
        borderRadius={8}
        alignItems="center"
        justifyContent={"center"}
        px={"8%"}
        bgColor={colors.notWhite}
        shadow={"6"}
        mt={"4%"}
      >
        {type === sectionTypes.quiz && (
          <VStack>
            <View h={30} />
            <Quiz
              question={question}
              answers={answers}
              correctAns={correct}
              next={() => {
                scrollToIndex(index + 1);
                setCurrentPage(index + 1);
              }}
            />
          </VStack>
        )}
        {image && (
          <Image
            style={{ aspectRatio: 1, height: "50%", width: undefined }}
            source={image}
            alt="illustration"
          />
        )}
        {title && (
          <Text color={colors.green} fontSize={"xl"} fontWeight="bold" mt={0}>
            {title}
          </Text>
        )}

        {text && (
          <Center flex={1}>
            <Text lineHeight={25} fontSize={15} textAlign="justify">
              {text}
            </Text>
          </Center>
        )}
      </VStack>
    </View>
  );
};

export default Page;
