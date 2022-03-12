import { HStack, Icon, Image, Pressable, Text } from "native-base";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const MenuTile = ({ iconName, text, bgColor = "white", onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <HStack space={2} py={3} px={"10%"} bgColor={bgColor} alignItems="center">
        <Icon as={FontAwesome5} name={iconName} />
        <Text>{text}</Text>
      </HStack>
    </Pressable>
  );
};

export default MenuTile;
