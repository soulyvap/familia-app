import {
  Button,
  Input,
  Modal,
  ScrollView,
  Select,
  Text,
  TextArea,
  useToast,
  View,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import UtilButton from "../../components/UtilButton";
import { colors } from "../../utils/colors";
import { Feather } from "@expo/vector-icons";
import ViewHeading from "../../components/ViewHeading";
import { chapters } from "../../variables/chapters";
import { constants } from "../../variables/constants";
import {
  Dimensions,
  Keyboard,
  LogBox,
  TouchableWithoutFeedback,
} from "react-native";
import useNoteDB from "../../utils/Database";

const NewNote = ({ route, navigation }) => {
  const noteData = route.params
    ? route.params.noteData
      ? route.params.noteData
      : undefined
    : undefined;
  const edit = noteData ? true : false;
  const [modalVisible, setModalVisible] = useState(false);
  const [chapter, setChapter] = useState("");
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const chapterData = [...chapters.tileInfo, { title: "Other" }];
  const toast = useToast();
  const { addNote, deleteNote, editNote, getNotes } = useNoteDB();

  LogBox.ignoreLogs(["NativeBase:"]);
  const pushNote = async () => {
    if (title.length === 0) {
      toast.show({
        title: "Invalid input",
        description: "Please enter at least a title",
        status: "warning",
      });
    } else {
      let data = {
        title: title,
        chapter: chapter !== "" ? chapter : "Other",
        content: noteText,
      };
      if (!edit) {
        await addNote({ ...data, created: new Date() });
        toast.show({
          description: "✅ Note added succesfully",
          duration: 2000,
        });
      } else {
        console.log(noteData);
        await editNote(noteData.id, { ...data, modified: new Date() });
        toast.show({
          description: "✅ Note edited succesfully",
          duration: 2000,
        });
      }
      navigation.goBack();
    }
  };

  const prefill = () => {
    setChapter(noteData.chapter);
    setTitle(noteData.title);
    setNoteText(noteData.content);
  };

  useEffect(() => {
    noteData && prefill();
  }, []);

  const h = Dimensions.get("window").height;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView pt={3}>
        <VStack h={h * 0.93}>
          <BackButton onPress={() => navigation.goBack()} />
          {edit && (
            <UtilButton
              bgColor={colors.green}
              icon={<Feather name={"trash-2"} size={20} />}
              right={8}
              onPress={() => {
                console.log("delete");
                setModalVisible(true);
              }}
            />
          )}
          <ViewHeading text={"Note"} />
          <Select
            mt={5}
            shadow="5"
            px={4}
            py={3}
            borderRadius={10}
            bgColor={"white"}
            mx={constants.stdMargin}
            selectedValue={chapter}
            placeholder={"Select a topic"}
            onValueChange={(value) => setChapter(value)}
          >
            {chapterData.map((chapter, index) => (
              <Select.Item
                label={chapter.title}
                value={chapter.title}
                key={index}
              />
            ))}
          </Select>
          <Input
            value={title}
            onChangeText={(value) => setTitle(value)}
            mt={5}
            placeholder="Title"
            bgColor={colors.notWhite}
            borderRadius={10}
            mx={constants.stdMargin + 4}
            _focus={{ borderColor: colors.green }}
            px={4}
          />
          <TextArea
            px={4}
            placeholder="Note"
            value={noteText}
            onChangeText={(value) => setNoteText(value)}
            _focus={{ borderColor: colors.green }}
            mt={5}
            h={"50%"}
            bgColor={colors.notWhite}
            borderRadius={10}
            mx={constants.stdMargin + 4}
          />
          <View flex={1} />
          <Button mb={"10%"} variant={"green"} onPress={pushNote}>
            Save
          </Button>
        </VStack>
        <Modal isOpen={modalVisible} onClose={setModalVisible}>
          <Modal.Content>
            <Modal.Header>Delete this note?</Modal.Header>
            <Modal.Body>
              <Text>This change will be permanent.</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant={"ghost"}
                  _text={{ color: colors.notBlack }}
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  bgColor={colors.fuksi}
                  borderRadius={8}
                  onPress={async () => {
                    setModalVisible(false);
                    await deleteNote(noteData.id);
                    navigation.goBack();
                  }}
                >
                  Delete
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default NewNote;
