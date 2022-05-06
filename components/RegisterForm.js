import {
  Button,
  Checkbox,
  FormControl,
  Icon,
  IconButton,
  Input,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { colors } from "../utils/colors";
import { Feather } from "@expo/vector-icons";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
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
      <FormControl w={"80%"}>
        <FormControl.Label _text={{ color: colors.fuksi, fontWeight: "bold" }}>
          Phone Number
        </FormControl.Label>
        <Input
          variant={"fuksi"}
          borderRadius={8}
          bgColor={"white"}
          shadow="6"
        />
      </FormControl>
      <Checkbox
        borderRadius={"full"}
        _checked={{ bgColor: colors.fuksi, borderColor: colors.fuksi }}
      >
        I accept the terms and privacy policy
      </Checkbox>
      <VStack
        flex={1}
        alignItems="center"
        justifyContent={"flex-end"}
        pb={"8%"}
        w="100%"
      >
        <Button variant={"green"} w={"80%"} py={3}>
          Continue
        </Button>
      </VStack>
    </VStack>
  );
};

export default RegisterForm;
