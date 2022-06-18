import { Dimensions, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { Box, ZStack, View, Center, Spinner } from "native-base";
import MemberPopUp from "./MemberPopUp";
import Navigator from "../navigator/Navigator";
import NavigatorOnline from "../navigator/NavigatorOnline";
import { MainContext } from "../contexts/MainContext";
import NewsPopUp from "./NewsPopUp";
import { ActivityIndicator } from "react-native-web";
import { colors } from "../utils/colors";

const AppContainer = () => {
  const { showPop, setShowPop, showNews, setShowNews, loading } =
    useContext(MainContext);
  const h = Dimensions.get("screen").height;
  const w = Dimensions.get("screen").width;

  return (
    <Box flex={1} safeArea>
      <MemberPopUp
        isOpen={showPop}
        setShowPop={setShowPop}
        text="Some benefits of becoming a member"
      />
      <NewsPopUp isOpen={showNews} setShowPop={setShowNews} />
      {/* <Navigator /> */}
      <ZStack flex={1}>
        {loading && <Center h={h} w={w} zIndex={3}><Spinner size={"lg"} color={colors.fuksi} /></Center>}
        <NavigatorOnline />
      </ZStack>
      {/* <Quiz /> */}
    </Box>
  );
};

export default AppContainer;
