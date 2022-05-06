import { Button, Icon, View, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import UtilButton from "../../components/UtilButton";
import ViewHeading from "../../components/ViewHeading";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../utils/colors";
import NoteList from "../../components/NoteList";

const Notes = ({ navigation }) => {
  return (
    <View flex={1} pt={3} bgColor={colors.notWhite}>
      <VStack flex={1}>
        <BackButton onPress={() => navigation.goBack()} />
        <UtilButton
          bgColor={colors.green}
          icon={<Icon color={"black"} as={<Entypo name="plus" />} />}
          onPress={() => navigation.navigate("NewNote")}
        />
        <ViewHeading text={"My notes"} />
        <NoteList navigation={navigation} />
      </VStack>
    </View>
  );
};

export default Notes;
