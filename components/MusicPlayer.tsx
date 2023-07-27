import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Text from "./custom_default_components/Text";

interface props {
  containerStyles?: StyleProp<ViewStyle>;
}

const MusicPlayer: React.FC<props> = ({ containerStyles }) => {
  const mergedContainerStyle = StyleSheet.flatten([
    styles.containerStyles,
    containerStyles,
  ]);
  return (
    <View style={mergedContainerStyle}>
      <Text>Song Name</Text>
      <View style={styles.buttonContainer}>
        <Text>previous btn</Text>
        <Text>Play / Pause btn</Text>
        <Text>Next btn</Text>
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  containerStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
