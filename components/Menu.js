import {
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
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Menu = ({ showMenu, setShowMenu, navigation }) => {
  const navigateTo = (screenName) => {
    setShowMenu(false);
    navigation.navigate(screenName);
  };
  return (
    <View>
      <Modal
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
      </Modal>
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
