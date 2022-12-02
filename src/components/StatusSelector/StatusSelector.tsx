import { useNavigation } from "@react-navigation/native";
import { RootNavigatorPropList } from "navigation/Navigator.types";
import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./StatusSelector.styles";
import { StatusSelectorProps as Props } from "./StatusSelector.types";
import { noteFilterStatus } from "utils/global.utils";
import useGlobal from "contexts/global/global.hooks";

import BackSVG from "assets/images/back.svg";

const StatusSelector: React.FC<Props> = (props) => {
  const { goBack } = useNavigation<RootNavigatorPropList>();
  const { setFilterByStatus } = useGlobal();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={styles.backdrop} onPress={() => goBack()} />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TouchableOpacity style={styles.goBack} onPress={goBack}>
            <BackSVG width={15} height={12} />
          </TouchableOpacity>
          <Text style={styles.title}>Select a status:</Text>
        </View>
        <View style={styles.optionsContainer}>
          {noteFilterStatus.map((noteFilter) => {
            const { id, status, name } = noteFilter;
            return (
              <TouchableOpacity
                onPress={() => {
                  setFilterByStatus(status);
                }}
                style={styles.button}
                key={id}
              >
                <Text style={styles.text}>{name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

StatusSelector.defaultProps = {};

export default StatusSelector;
