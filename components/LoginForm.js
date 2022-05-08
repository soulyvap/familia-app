import {
  Button,
  FormControl,
  Icon,
  IconButton,
  Input,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { colors } from "../utils/colors";
import { Feather } from "@expo/vector-icons";
import QuestionText from "./QuestionText";

const LoginForm = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <VStack alignItems={"center"} space={4}>
      <FormControl w={"80%"}>
        <FormControl.Label _text={{ color: colors.fuksi, fontWeight: "bold" }}>
          Username
        </FormControl.Label>
        <Input
          variant={"fuksi"}
          borderRadius={8}
          bgColor={"white"}
          shadow="6"
        />
      </FormControl>
      <FormControl w={"80%"}>
        <FormControl.Label _text={{ color: colors.fuksi, fontWeight: "bold" }}>
          Password
        </FormControl.Label>
        <Input
          variant={"fuksi"}
          type={showPass ? "text" : "password"}
          borderRadius={8}
          bgColor={"white"}
          shadow="6"
          InputRightElement={
            <IconButton
              icon={
                <Icon
                  as={<Feather name={showPass ? "eye-off" : "eye"} />}
                  color={colors.fuksi}
                  size={6}
                />
              }
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
      </FormControl>
      <QuestionText
        text={"Forgot your password?"}
        btnText={"Click here"}
        onPress={() => {}}
      />
      <Button
        variant={"green"}
        w={"80%"}
        py={3}
        onPress={() => navigation.navigate("Polls")}
      >
        Log in
      </Button>
    </VStack>
  );
};

export default LoginForm;
