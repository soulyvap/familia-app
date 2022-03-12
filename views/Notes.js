import { Button, Icon, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import UtilButton from "../components/UtilButton";
import ViewHeading from "../components/ViewHeading";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../utils/colors";
import NoteList from "../components/NoteList";

const Notes = ({ navigation }) => {
  return (
    <VStack flex={1} bgColor={colors.notWhite}>
      <BackButton onPress={() => navigation.goBack()} />
      <UtilButton
        bgColor={colors.green}
        icon={<Icon color={"black"} as={<Entypo name="plus" />} />}
        onPress={() => navigation.navigate("NewNote")}
      />
      <ViewHeading text={"My notes"} />
      <NoteList />
    </VStack>
  );
};

export default Notes;
