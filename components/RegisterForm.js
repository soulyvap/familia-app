import {
  Button,
  Checkbox,
  FormControl,
  Icon,
  IconButton,
  Input,
  useToast,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { colors } from "../utils/colors";
import { Feather } from "@expo/vector-icons";
import { useAuthentication } from "../utils/hooks/useAuthentication";

const RegisterForm = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const { register } = useAuthentication();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const toast = useToast();

  const handleRegister = async () => {
    if (email == "" || password == "") {
      toast.show({
        title: "Please let us identify you",
        description: "Please enter an email and a password",
        status: "warning",
      });
      return;
    }

    if (!accepted) {
      toast.show({
        title: "One more thing",
        description: "Please accept the terms and privacy policy",
        status: "warning",
      });
      return;
    }

    await register(email, password, username, phone);

    console.log("registered");
  };

  return (
    <VStack alignItems={"center"} space={4} w={"100%"} flex={1}>
      <FormControl w={"80%"}>
        <FormControl.Label _text={{ color: colors.fuksi, fontWeight: "bold" }}>
          Username
        </FormControl.Label>
        <Input
          variant={"fuksi"}
          borderRadius={8}
          bgColor={"white"}
          shadow="6"
          autoCapitalize={"none"}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </FormControl>
      <FormControl w={"80%"}>
        <FormControl.Label _text={{ color: colors.fuksi, fontWeight: "bold" }}>
          E-mail
        </FormControl.Label>
        <Input
          variant={"fuksi"}
          borderRadius={8}
          bgColor={"white"}
          shadow="6"
          autoCapitalize={"none"}
          value={email}
          onChangeText={(text) => setEmail(text)}
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
          autoCapitalize={"none"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </FormControl>
      <FormControl w={"80%"}>
        <FormControl.Label _text={{ color: colors.fuksi, fontWeight: "bold" }}>
          Phone Number
        </FormControl.Label>
        <Input
          variant={"fuksi"}
          borderRadius={8}
          bgColor={"white"}
          shadow="6"
          autoCapitalize={"none"}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
      </FormControl>
      <Checkbox
        borderRadius={"full"}
        _checked={{ bgColor: colors.fuksi, borderColor: colors.fuksi }}
        onChange={(isSelected) => setAccepted(isSelected)}
      >
        I accept the terms and privacy policy
      </Checkbox>
      <VStack
        flex={1}
        alignItems="center"
        justifyContent={"flex-end"}
        pb={"15%"}
        w="100%"
      >
        <Button
          variant={"green"}
          w={"80%"}
          py={3}
          onPress={() => {
            handleRegister();
          }}
        >
          Continue
        </Button>
      </VStack>
    </VStack>
  );
};

export default RegisterForm;
