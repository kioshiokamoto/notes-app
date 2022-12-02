import useGlobal from "contexts/global/global.hooks";
import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./SearchBar.styles";
import { SearchBarProps as Props } from "./SearchBar.types";

import CrossSVG from "assets/images/cross.svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchBar: React.FC<Props> = (props) => {
  const { setFilterByText, filterByText } = useGlobal();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setFilterByText}
        value={filterByText}
        placeholder="🔎 Search a note"
        keyboardType="default"
      />
      <TouchableOpacity onPress={() => setFilterByText("")}>
        <CrossSVG width={18} height={18} />
      </TouchableOpacity>
    </View>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
