import React from "react";
import { extendTheme, NativeBaseProvider } from "native-base";
import { colors } from "./utils/colors";
import { constants } from "./variables/constants";
import { MainProvider } from "./contexts/MainContext";
import { LogBox } from "react-native";
import AppContainer from "./components/AppContainer";

LogBox.ignoreLogs(["NativeBase: The contrast ratio"]);

const App = () => {
  // const [showPop, setShowPop] = useState(true);

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
      Text: {
        variants: {
          largeTitle: {
            fontWeight: "bold",
            fontSize: "2xl",
          },
        },
      },
      Input: {
        variants: {
          fuksi: {
            px: 5,
            _focus: { borderColor: colors.fuksi },
          },
        },
      },
    },
  });
  return (
    <MainProvider>
      <NativeBaseProvider theme={theme}>
        <AppContainer />
      </NativeBaseProvider>
    </MainProvider>
  );
};

export default App;
