import {
  Button,
  FormControl,
  Icon,
  IconButton,
  Input,
  useToast,
  VStack,
} from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { colors } from "../utils/colors";
import { Feather } from "@expo/vector-icons";
import QuestionText from "./QuestionText";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { MainContext } from "../contexts/MainContext";

const LoginForm = ({ navigation }) => {
  const { login } = useAuthentication();
  const { currentUser } = useContext(MainContext);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    if (email == "" || password == "") {
      toast.show({
        title: "Please let us identify you",
        description: "Please enter an email and a password",
        status: "warning",
      });
      return;
    }
    await login(email, password);
  };

  return (
    <VStack alignItems={"center"} space={4}>
      <FormControl w={"80%"}>
        <FormControl.Label _text={{ color: colors.fuksi, fontWeight: "bold" }}>
          Email
        </FormControl.Label>
        <Input
          autoCapitalize="none"
          variant={"fuksi"}
          borderRadius={8}
          bgColor={"white"}
          shadow="6"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </FormControl>
      <FormControl w={"80%"}>
        <FormControl.Label _text={{ color: colors.fuksi, fontWeight: "bold" }}>
          Password
        </FormControl.Label>
        <Input
          autoCapitalize="none"
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
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </FormControl>
      <QuestionText
        text={"Forgot your password?"}
        btnText={"Click here"}
        onPress={() => {}}
      />
      <Button variant={"green"} w={"80%"} py={3} onPress={() => handleLogin()}>
        Log in
      </Button>
    </VStack>
  );
};

export default LoginForm;
