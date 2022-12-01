import { useNavigation } from "@react-navigation/native";
import useGlobal from "contexts/global/global.hooks";
import { RootNavigatorPropList } from "navigation/Navigator.types";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./Todo.styles";
import { TodoProps as Props } from "./Todo.types";

const Todo: React.FC<Props> = (props) => {
  const { note } = props;
  const { description, id, status } = note;
  const { navigate, goBack } = useNavigation<RootNavigatorPropList>();
  const { updateNote, deleteNote } = useGlobal();
  const isCompleted = status === "COMPLETED";
  const checkStyle = isCompleted
    ? [styles.out, styles.completedOut]
    : styles.out;

  const handleToggle = () => {
    updateNote(id, { status: status === "LISTED" ? "COMPLETED" : "LISTED" });
  };

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleEdit = () => {
    navigate("NoteScreen", { id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.checkButton} onPress={handleToggle}>
          <View style={[styles.check, checkStyle]}>
            {isCompleted ? <View style={styles.active} /> : null}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEdit}>
          <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

Todo.defaultProps = {};

export default Todo;
