import {
  Button,
  FlatList,
  Heading,
  Text,
  useToast,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { colors } from "../utils/colors";

const Quiz = ({ question, answers, correctAns, next }) => {
  const [selected, setSelected] = useState();
  const [correct, setCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const renderItem = (item, index) => {
    return (
      <Pressable
        key={item + index}
        disabled={correct}
        onPress={() => {
          setSelected(index);
          if (submitted) {
            setSubmitted(false);
          }
        }}
      >
        <View
          borderRadius={8}
          shadow="4"
          bgColor={index === selected ? colors.fuksi : "white"}
        >
          <Text
            textAlign={"center"}
            py={3}
            color={index === selected ? "white" : undefined}
          >
            {item}
          </Text>
        </View>
      </Pressable>
    );
  };
  const handleSubmit = () => {
    if (selected === correctAns) {
      setCorrect(true);
    }
    setSubmitted(true);
  };
  return (
    <VStack flex={1} mx={"10%"} py={"10%"}>
      <Heading fontWeight={"normal"} color={colors.green} mb={10}>
        {question}
      </Heading>
      <VStack space={4}>{answers.map(renderItem)}</VStack>
      {submitted && (
        <View mt={5} borderRadius={8}>
          <Text
            textAlign={"center"}
            py={3}
            color={correct ? colors.green : undefined}
          >
            {submitted && !correct
              ? "❌ Incorrect answer.\nTry again."
              : "✔️ Correct answer!"}
          </Text>
        </View>
      )}
      <View flex={1} />
      <Button
        disabled={selected === undefined}
        variant={"green"}
        onPress={correct ? next : handleSubmit}
        bgColor={selected === undefined ? colors.grey : colors.green}
      >
        {correct ? "Next" : "Check answer"}
      </Button>
    </VStack>
  );
};

export default Quiz;
