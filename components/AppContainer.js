import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Box } from "native-base";
import MemberPopUp from "./MemberPopUp";
import Navigator from "../navigator/Navigator";
import NavigatorOnline from "../navigator/NavigatorOnline";
import { MainContext } from "../contexts/MainContext";

const AppContainer = () => {
  const { showPop, setShowPop } = useContext(MainContext);

  return (
    <Box flex={1} safeArea>
      <MemberPopUp
        isOpen={showPop}
        setShowPop={setShowPop}
        text="Some benefits of becoming a member"
      />
      <Navigator />
      {/* <NavigatorOnline /> */}
      {/* <Quiz /> */}
    </Box>
  );
};

export default AppContainer;
