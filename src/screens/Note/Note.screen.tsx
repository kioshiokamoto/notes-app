import NoteEditor from "components/NoteEditor/NoteEditor";
import React from "react";
import { Pressable, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

import styles from "./Note.screen.styles";
import { NoteProps as Props } from "./Note.screen.types";

const Note: React.FC<Props> = (props) => {
  const { route } = props;
  const { params } = route;
  const { id } = params ?? {};

  return (
    <TouchableWithoutFeedback
      style={styles.dismiss}
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <NoteEditor id={id} />
      </View>
    </TouchableWithoutFeedback>
  );
};

Note.defaultProps = {};

export default Note;
