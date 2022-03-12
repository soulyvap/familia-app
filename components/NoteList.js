import { Center, FlatList, Text, View } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../contexts/MainContext";
import { colors } from "../utils/colors";
import useNoteDB from "../utils/Database";
import NoteTile from "./NoteTile";

const NoteList = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const { getNotes } = useNoteDB();
  const { update } = useContext(MainContext);

  const getNotesFromDB = async () => {
    const notesArray = await getNotes();
    setNotes([...notesArray]);
  };

  useEffect(() => {
    getNotesFromDB();
  }, [update]);

  const renderItem = ({ item }) => (
    <NoteTile
      title={item.title}
      onPress={() => navigation.navigate("NewNote", { noteData: item })}
    />
  );

  return (
    <View flex={1}>
      {notes.length === 0 ? (
        <Center flex={1}>
          <Text color={colors.notBlack}>Add your first notes</Text>
        </Center>
      ) : (
        <FlatList
          mt={5}
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default NoteList;
