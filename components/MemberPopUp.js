import React from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Modal,
  Text,
  VStack,
  ZStack,
} from "native-base";
import { Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MemberPopUp = ({ isOpen, setShowPop, text }) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setShowPop(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.Body py={"10"}>
          <VStack space={"6"} alignItems={"center"}>
            <Text variant={"largeTitle"}>Are you a member?</Text>
            <Text textAlign={"center"}>{text || "Benefits"}</Text>
            <Button
              variant={"green"}
              mx="10%"
              py={3}
              onPress={async () =>
                await Linking.openURL("https://www.familiary.fi/")
              }
            >
              Become a member
            </Button>
            <Checkbox>Don't show again</Checkbox>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default MemberPopUp;
