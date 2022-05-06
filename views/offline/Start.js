import { Button, Center, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import { colors } from "../../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";

const Start = ({ navigation }) => {
  const setFirstTime = async () => {
    await AsyncStorage.setItem("isFirstTime", "false");
    navigation.replace("Home");
  };
  return (
    <VStack flex={1}>
      <VStack h="70%" alignItems="center" justifyContent={"flex-end"} space={4}>
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
      <VStack h="30%" w={"100%"} justifyContent="center">
        <Button variant={"green"} mx="10%" py={3} onPress={setFirstTime}>
          Continue
        </Button>
      </VStack>
    </VStack>
  );
};

export default Start;
