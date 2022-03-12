import AsyncStorage from "@react-native-async-storage/async-storage";

const noteDBKey = "Notes";

const useNoteDB = () => {
  const getNotes = async () => {
    try {
      const notesJSON = await AsyncStorage.getItem(noteDBKey);
      if (notesJSON) {
        const notes = await JSON.parse(notesJSON);
        return notes;
      } else {
        return [];
      }
    } catch (error) {
      console.error("getNotes", error);
    }
  };

  const getNote = async (id) => {
    try {
      const notesArray = await getNotes();
      return notesArray.find((note) => note.id === id);
    } catch (error) {
      console.error("getNote", error);
    }
  };

  const addNote = async (noteData) => {
    try {
      let notesArray = [...(await getNotes())];
      const lastNote = notesArray[notesArray.lastIndexOf()];
      const id = lastNote ? lastNote.id + 1 : 1;
      const noteWithId = { ...noteData, id: id };
      notesArray.push(noteWithId);
      const notesJSON = JSON.stringify(notesArray);
      await AsyncStorage.setItem(noteDBKey, notesJSON);
    } catch (error) {
      console.error("addNote", error);
    }
  };

  const editNote = async (id, noteData) => {
    try {
      let notesArray = await getNotes();
      const note = getNote(id);
      const index = notesArray.indexOf(note);
      const noteInArray = notesArray[index];
      const { title, chapter, content, modified } = noteData;
      title && (noteInArray.title = title);
      chapter && (noteInArray.chapter = title);
      content && (noteInArray.content = title);
      noteInArray.modified = modified;
      const notes = JSON.stringify(notesArray);
      await AsyncStorage.setItem(noteDBKey, notes);
    } catch (error) {
      console.error("deleteNote", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const notesArray = await getNotes();
      const newArray = notesArray.filter((note) => note.id !== id);
      const notes = JSON.stringify(newArray);
      await AsyncStorage.setItem(noteDBKey, notes);
    } catch (error) {
      console.error("deleteNote", error);
    }
  };
  return { getNotes, addNote, deleteNote, getNote, editNote };
};

export default useNoteDB;
