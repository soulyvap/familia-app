import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Center, HStack, Image, Text, VStack } from "native-base";
import React, { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { colors } from "../../utils/colors";

const Start = ({ navigation }) => {
  const { setOffline } = useContext(MainContext);

  const stayOffline = async () => {
    try {
      setOffline(true);
      AsyncStorage.setItem("offline", "true");
    } catch (error) {
      console.error("stayOffline", error);
    }
  };

  return (
    <VStack flex={1} bgColor="white">
      <VStack h="65%" alignItems="center" justifyContent={"flex-end"} space={4}>
        <Image
          source={require("../../assets/familiaglobe_square.png")}
          alt="familia-globe"
          h={"50%"}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/familiatext_large.png")}
          alt="familia"
          h={"15%"}
          resizeMode="contain"
        />
        <Text color={colors.grey} fontSize="15">
          The leading expert in intercultural families
        </Text>
      </VStack>
      <VStack h="35%" w={"100%"} justifyContent="center" space={4}>
        <Button
          variant={"green"}
          mx="10%"
          py={3}
          onPress={() => navigation.navigate("Login")}
        >
          Sign In
        </Button>
        <Button
          variant={"basic"}
          bgColor={colors.fuksi}
          mx="10%"
          py={3}
          onPress={() => navigation.navigate("Register")}
        >
          Create New Account
        </Button>
        <Button
          variant={"basic"}
          bgColor={colors.notWhite}
          _text={{ color: colors.green }}
          mx="10%"
          py={3}
          onPress={() => stayOffline()}
        >
          Continue without an account
        </Button>
      </VStack>
    </VStack>
  );
};

export default Start;
