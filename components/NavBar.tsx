import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Text from "./custom_default_components/Text";

interface props {
  containerStyles?: StyleProp<ViewStyle>;
}

const NavBar: React.FC<props> = ({ containerStyles }) => {
  const mergedContainerStyle = StyleSheet.flatten([
    styles.containerStyles,
    containerStyles,
  ]);
  return (
    <View style={mergedContainerStyle}>
      <Text>Playlist</Text>
      <Text>Import</Text>
      <Text>Tracks</Text>
      <Text>Settings</Text>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  containerStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
