import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Header.styles";
import { HeaderProps as Props } from "./Header.types";

import PlusSVG from "assets/images/plus.svg";

const Header: React.FC<Props> = (props) => {
  const onPress = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes List 🚀</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <PlusSVG width={18} height={18} fill="white" />
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {};

export default Header;
