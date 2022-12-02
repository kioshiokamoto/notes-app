import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "components/Header/Header";
import SearchBar from "components/SearchBar/SearchBar";
import TodoList from "components/TodoList/TodoList";
import styles from "./Home.screen.styles";
import { HomeProps as Props } from "./Home.screen.types";

const Home: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <TodoList />
    </SafeAreaView>
  );
};

Home.defaultProps = {};

export default Home;
