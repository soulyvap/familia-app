import { Center, Image, Text, View, VStack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { colors } from "../utils/colors";

const Page = () => {
  const h = Dimensions.get("window").height;
  const w = Dimensions.get("window").width;
  return (
    <View h={h} w={w} alignItems="center">
      <VStack
        h={"80%"}
        w={"90%"}
        borderRadius={8}
        alignItems="center"
        px={"8%"}
        bgColor={colors.notWhite}
        shadow={"6"}
        mt={"4%"}
      >
        <Image
          style={{ aspectRatio: 1, height: "30%", width: undefined }}
          source={require("../assets/love.png")}
          alt="illustration"
        />
        <Text color={colors.green} fontWeight="bold" mt={0}>
          From falling in love to love
        </Text>
        <Center flex={1}>
          <Text textAlign="justify">
            Real life relationships are not necessarily as straightforward.
            Romantic relationships have different stages, the first of which is
            falling in love. Everything begins from two people seeing something
            interesting in each other and finding, to their joy, that the
            feeling is mutual. We see a lot of similarities to ourselves in the
            person we love, and this resemblance that we experience brings a
            couple who are in love closer. A couple who have just fallen in love
            see each other in a strongly positive light and can see no faults in
            each other, only an outright fulfilment of their dreams.
          </Text>
        </Center>
      </VStack>
    </View>
  );
};

export default Page;
