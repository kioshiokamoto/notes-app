import Header from "components/Header/Header";
import TodoList from "components/TodoList/TodoList";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./Home.screen.styles";
import { HomeProps as Props } from "./Home.screen.types";

const Home: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoList />
    </SafeAreaView>
  );
};

Home.defaultProps = {};

export default Home;
