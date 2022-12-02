import StatusSelector from "components/StatusSelector/StatusSelector";
import React from "react";
import { Text, View } from "react-native";

import styles from "./Filter.screen.styles";
import { FilterProps as Props } from "./Filter.screen.types";

const Filter: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <StatusSelector />
    </View>
  );
};

Filter.defaultProps = {};

export default Filter;
