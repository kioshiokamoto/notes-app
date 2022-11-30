import React from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";

import styles from "./TodoList.styles";
import { TodoListProps as Props } from "./TodoList.types";

import EmptySVG from "assets/images/empty.svg";
import useGlobal from "contexts/global/global.hooks";

const TodoList: React.FC<Props> = (props) => {
  const { width } = useWindowDimensions();
  const { notes } = useGlobal();
  const isTablet = width > 425;

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyContainer.text}>There is no note yet</Text>
        <EmptySVG width={isTablet ? 425 : width} />
      </View>
    );
  };

  // TODO: to render notes
  // const renderItem = useCallback<ListRenderItem<Todo>>(item=> {},[])
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={(item) => <></>}
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
