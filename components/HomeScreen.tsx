import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./custom_default_components/Text";
import MusicPlayer from "./MusicPlayer";
import NavBar from "./NavBar";

const HomeScreen = () => {
  return (
    <View style={styles.containerStyles}>
      <View style={styles.upperSection}>
        <Text>This is Home screen</Text>
        <Text>Songs component here</Text>
      </View>
      <MusicPlayer containerStyles={styles.player} />
      <NavBar containerStyles={styles.navbar} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
  },
  upperSection: {
    flex: 7,
    backgroundColor: "red",
  },
  player: {
    flex: 2,
    backgroundColor: "blue",
  },
  navbar: {
    flex: 1,
    backgroundColor: "green",
  },
});
