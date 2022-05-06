import { Button, HStack, Text } from "native-base";
import React from "react";
import { colors } from "../utils/colors";

const QuestionText = ({ text, btnText, onPress }) => {
  return (
    <HStack alignItems={"center"}>
      <Text>{text}</Text>
      <Button
        _text={{ color: colors.fuksi, fontWeight: "bold" }}
        variant={"ghost"}
        onPress={onPress}
      >
        {btnText}
      </Button>
    </HStack>
  );
};

export default QuestionText;
