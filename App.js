import React from "react";
import { Box, extendTheme, NativeBaseProvider } from "native-base";
import Home from "./views/Home";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator/Navigator";
import Notes from "./views/Notes";
import NewNote from "./views/NewNote";
import { colors } from "./utils/colors";
import { constants } from "./variables/constants";
import { MainProvider } from "./contexts/MainContext";

const App = () => {
  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          green: {
            bgColor: colors.green,
            borderRadius: 8,
            mx: constants.stdMargin + 3,
            _text: { color: "white", fontWeight: "bold" },
          },
        },
      },
    },
  });
  return (
    <MainProvider>
      <NativeBaseProvider theme={theme}>
        <Box flex={1} safeArea>
          <Navigator />
        </Box>
      </NativeBaseProvider>
    </MainProvider>
  );
};

export default App;
