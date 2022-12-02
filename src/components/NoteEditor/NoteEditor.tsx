import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Pressable } from "react-native";
import { TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { RootNavigatorPropList } from "navigation/Navigator.types";
import styles from "./NoteEditor.styles";
import { NoteEditorProps as Props } from "./NoteEditor.types";
import useGlobal from "contexts/global/global.hooks";
import { Note } from "types/global.types";

import BackSVG from "assets/images/back.svg";

const NoteEditor: React.FC<Props> = (props) => {
  const { id: editableNoteId } = props ?? {};
  const { goBack } = useNavigation<RootNavigatorPropList>();
  const { notes } = useGlobal();
  const { createNote, updateNote } = useGlobal();
  const [note, setNote] = useState<string>();
  const { bottom } = useSafeAreaInsets();

  const handleSubmit = async () => {
    if (editableNoteId) {
      updateNote(editableNoteId, { description: note });
      goBack();
      return;
    }

    createNote({
      description: note ?? "",
      id: `${Date.now()}`,
      status: "LISTED",
    });

    goBack();
  };

  useEffect(() => {
    const searchNote = notes?.find(
      (singleNote) => singleNote.id === editableNoteId
    );
    setNote(searchNote?.description);
  }, [editableNoteId]);

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "android" ? undefined : "padding"}
      style={styles.keyboard}
      keyboardVerticalOffset={Platform.OS === "android" ? -150 : -40}
    >
      <View style={[styles.safeArea, { marginBottom: bottom }]}>
        <Pressable style={styles.keyboard} onPress={() => goBack()} />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <TouchableOpacity style={styles.goBack} onPress={goBack}>
              <BackSVG width={15} height={12} />
            </TouchableOpacity>
            <Text style={styles.title}>
              {editableNoteId ? "Update a note" : "Add a new note"}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setNote}
              value={note}
              placeholder="Enter your note.."
              keyboardType="default"
            />
          </View>
          <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.submit.text}>
              {editableNoteId ? "Save" : "Create"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

NoteEditor.defaultProps = {};

export default NoteEditor;
