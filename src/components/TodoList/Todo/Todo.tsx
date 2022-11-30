import React from "react";
import { View, Text } from "react-native";

import styles from "./Todo.styles";
import { TodoProps as Props } from "./Todo.types";

const Todo: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Todo</Text>
    </View>
  )
};

Todo.defaultProps = {};

export default Todo;