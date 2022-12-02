import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./Header.styles";
import { HeaderProps as Props } from "./Header.types";
import { RootNavigatorPropList } from "navigation/Navigator.types";

import PlusSVG from "assets/images/plus.svg";
import HamburgerSVG from "assets/images/menu-icon.svg";

const Header: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<RootNavigatorPropList>();

  const onPressNew = () => {
    navigate("NoteScreen");
  };

  const onPressHamburger = () => {
    navigate("FilterScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes List 🚀</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onPressHamburger} style={styles.hamburger}>
          <HamburgerSVG width={18} height={18} fill="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressNew} style={styles.plus}>
          <PlusSVG width={18} height={18} fill="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Header.defaultProps = {};

export default Header;
