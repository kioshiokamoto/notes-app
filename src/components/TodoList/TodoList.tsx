import React, { useCallback } from "react";
import { View, Text, FlatList } from "react-native";
import { useWindowDimensions, ListRenderItem } from "react-native";

import styles from "./TodoList.styles";
import { TodoListProps as Props } from "./TodoList.types";

import EmptySVG from "assets/images/empty.svg";
import useGlobal from "contexts/global/global.hooks";
import { Note } from "types/global.types";
import Todo from "./Todo/Todo";

const TodoList: React.FC<Props> = (props) => {
  const { width } = useWindowDimensions();
  const { notes } = useGlobal();
  const isTablet = width > 425;
  const filteredNotes = notes?.filter((note) => note.status !== "DELETED");

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyContainer.text}>There is no note yet</Text>
        <EmptySVG width={isTablet ? 425 : width} />
      </View>
    );
  };

  const renderItem = useCallback<ListRenderItem<Note>>((element) => {
    const { item } = element ?? {};

    return <Todo note={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredNotes}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={renderEmpty()}
      />
    </View>
  );
};

TodoList.defaultProps = {};

export default TodoList;
