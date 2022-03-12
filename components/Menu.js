import {
  Actionsheet,
  Center,
  Fab,
  HStack,
  Icon,
  IconButton,
  Modal,
  View,
  VStack,
} from "native-base";
import React from "react";
import { colors } from "../utils/colors";
import MenuTile from "./MenuTile";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Linking } from "react-native";

const Menu = ({ showMenu, setShowMenu, navigation }) => {
  const navigateTo = (screenName) => {
    setShowMenu(false);
    navigation.navigate(screenName);
  };

  const icons = [
    <Icon as={FontAwesome5} name={"info-circle"} />,
    <Icon as={FontAwesome5} name={"sticky-note"} />,
    <Icon as={FontAwesome5} name={"share-alt"} />,
    <Icon as={FontAwesome5} name={"globe-europe"} />,
    <Icon as={FontAwesome5} name={"handshake"} />,
    <Icon as={FontAwesome5} name={"cog"} />,
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
          >
            Share
          </Actionsheet.Item>
          <Actionsheet.Item py={3} borderRadius={0} startIcon={icons[3]}>
            Language
          </Actionsheet.Item>
          <Actionsheet.Item
            py={3}
            bgColor={colors.green}
            borderRadius={0}
            startIcon={icons[4]}
          >
            Membership
          </Actionsheet.Item>
          <Actionsheet.Item py={3} borderRadius={0} startIcon={icons[5]}>
            Profile settings
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
                    <Icon
                      as={MaterialCommunityIcons}
                      name="web"
                      color={colors.notBlack}
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
      {/* <Modal
        onClose={() => setShowMenu(false)}
        isOpen={showMenu}
        animationPreset="slide"
        closeOnOverlayClick
      >
        <Modal.Content style={{ marginBottom: 10, marginTop: "auto" }}>
          <Modal.Body p={0}>
            <VStack justifyContent="flex-end">
              <View h={60} />
              <MenuTile
                iconName="info-circle"
                text={"Contact us"}
                bgColor={colors.green}
              />
              <MenuTile
                iconName="sticky-note"
                text={"Notes"}
                onPress={() => navigateTo("Notes")}
              />
              <MenuTile
                iconName="share-alt"
                text={"Share"}
                bgColor={colors.green}
              />
              <MenuTile iconName="globe-europe" text={"Language"} />
              <MenuTile
                iconName="handshake"
                text={"Membership"}
                bgColor={colors.green}
              />
              <MenuTile iconName="cog" text={"Profile settings"} />
              <Center h={100}>
                <HStack>
                  <IconButton
                    icon={<Icon as={FontAwesome5} name="facebook" />}
                  />
                  <IconButton
                    icon={<Icon as={FontAwesome5} name="instagram" />}
                  />
                  <IconButton
                    icon={<Icon as={FontAwesome5} name="twitter" />}
                  />
                </HStack>
              </Center>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal> */}
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
