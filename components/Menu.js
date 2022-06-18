import {
  Actionsheet,
  Center,
  Fab,
  HStack,
  Icon,
  IconButton,
  Image,
  Modal,
  View,
  VStack,
} from "native-base";
import React, { useContext } from "react";
import { colors } from "../utils/colors";
import MenuTile from "./MenuTile";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Linking } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MainContext } from "../contexts/MainContext";

const Menu = ({ showMenu, setShowMenu, navigation }) => {
  const { signOut } = useAuthentication();
  const { setOffline, setCurrentUser, setShowNews } = useContext(MainContext);

  const navigateTo = (screenName) => {
    setShowMenu(false);
    navigation.navigate(screenName);
  };

  const handleLogout = async () => {
    try {
      setOffline(false);
      await signOut();
      await AsyncStorage.removeItem("offline");
      setCurrentUser(undefined);
    } catch (error) {
      console.error("logout", error);
    }
  };

  const icons = [
    <Icon as={FontAwesome5} name={"info-circle"} />,
    <Icon as={FontAwesome5} name={"sticky-note"} />,
    <Icon as={FontAwesome5} name={"newspaper"} />,
    <Icon as={FontAwesome5} name={"globe-europe"} />,
    <Icon as={FontAwesome5} name={"handshake"} />,
    <Icon as={FontAwesome5} name={"cog"} />,
    <Icon as={FontAwesome5} name={"sign-out-alt"} />,
  ];

  return (
    <View>
      <Actionsheet onClose={() => setShowMenu(false)} isOpen={showMenu}>
        <Actionsheet.Content padding={0}>
          <Actionsheet.Item disabled />
          <Actionsheet.Item
            py={3}
            bgColor={colors.green}
            borderRadius={0}
            startIcon={icons[0]}
          >
            Contact us
          </Actionsheet.Item>
          <Actionsheet.Item
            py={3}
            borderRadius={0}
            startIcon={icons[1]}
            onPress={() => navigateTo("Notes")}
          >
            Notes
          </Actionsheet.Item>
          <Actionsheet.Item
            py={3}
            bgColor={colors.green}
            borderRadius={0}
            startIcon={icons[2]}
            onPress={() => setShowNews(true)}
          >
            News
          </Actionsheet.Item>
          <Actionsheet.Item py={3} borderRadius={0} startIcon={icons[3]}>
            Language
          </Actionsheet.Item>
          <Actionsheet.Item
            py={3}
            bgColor={colors.green}
            borderRadius={0}
            startIcon={icons[4]}
            onPress={async () =>
              await Linking.openURL("https://www.familiary.fi/membership.html")
            }
          >
            Membership
          </Actionsheet.Item>
          <Actionsheet.Item py={3} borderRadius={0} startIcon={icons[5]}>
            Profile settings
          </Actionsheet.Item>
          <Actionsheet.Item
            py={3}
            bgColor={colors.fuksi}
            borderRadius={0}
            startIcon={icons[6]}
            onPress={() => {
              handleLogout();
            }}
          >
            Log Out
          </Actionsheet.Item>
          <Actionsheet.Footer>
            <Center h={70} mb={5}>
              <HStack>
                <IconButton
                  icon={
                    <Icon as={FontAwesome5} name="facebook" color={"#1771e6"} />
                  }
                  onPress={async () =>
                    await Linking.openURL(
                      "https://www.facebook.com/kahdenkulttuurinperheet/"
                    )
                  }
                />
                <IconButton
                  icon={
                    <Icon
                      as={FontAwesome5}
                      name="instagram"
                      color={"#993491"}
                    />
                  }
                  onPress={async () =>
                    await Linking.openURL(
                      "https://www.instagram.com/familia_ry/"
                    )
                  }
                />
                <IconButton
                  icon={
                    <Icon as={FontAwesome5} name="twitter" color={"#1c99e7"} />
                  }
                  onPress={async () =>
                    await Linking.openURL("https://twitter.com/familia_ry")
                  }
                />
                <IconButton
                  icon={
                    <Image
                      source={require("../assets/familiaglobe_square.png")}
                      alt="Familia globe"
                      size={"8"}
                    />
                  }
                  onPress={async () =>
                    await Linking.openURL("https://www.familiary.fi/")
                  }
                />
              </HStack>
            </Center>
          </Actionsheet.Footer>
        </Actionsheet.Content>
      </Actionsheet>

      {!showMenu && (
        <Fab
          size={"12"}
          icon={<Icon as={Ionicons} name="menu" color={"white"} />}
          onPress={() => setShowMenu(true)}
          bgColor={colors.fuksi}
        />
      )}
    </View>
  );
};

export default Menu;
