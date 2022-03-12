import {
  Button,
  Input,
  ScrollView,
  Select,
  TextArea,
  useToast,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import UtilButton from "../components/UtilButton";
import { colors } from "../utils/colors";
import { Feather } from "@expo/vector-icons";
import ViewHeading from "../components/ViewHeading";
import { chapters } from "../variables/chapters";
import { constants } from "../variables/constants";
import {
  Dimensions,
  Keyboard,
  LogBox,
  TouchableWithoutFeedback,
} from "react-native";
import useNoteDB from "../utils/Database";

const NewNote = ({ edit = false, navigation }) => {
  const [chapter, setChapter] = useState("");
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const chapterData = [...chapters.tileInfo, { title: "Other" }];
  const toast = useToast();
  const { addNote, deleteNote, editNote, getNotes } = useNoteDB();

  LogBox.ignoreLogs(["NativeBase:"]);

  const showToast = (message) => {
    toast.show({
      title: "Invalid note",
      description: message,
      status: "warning",
    });
  };

  const pushNote = async () => {
    if (title.length === 0) {
      showToast("Please enter at least a title");
    } else {
      const noteData = {
        title: title,
        chapter: chapter.length > 0 ? chapter : "Other",
        content: noteText,
        created: new Date(),
      };
      console.log(noteData);
      await addNote(noteData);
      // const notes = await getNotes();
      // console.log(notes);
    }
  };

  const h = Dimensions.get("window").height;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <VStack h={h * 0.95}>
          <BackButton onPress={() => navigation.goBack()} />
          {edit && (
            <UtilButton
              bgColor={colors.green}
              icon={<Feather name={"trash-2"} size={20} />}
              right={8}
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
          <Button
            mb={"10%"}
            variant={"green"}
            onPress={async () => await pushNote()}
          >
            Save
          </Button>
        </VStack>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default NewNote;
