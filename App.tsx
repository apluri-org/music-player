import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import HomeScreen from "./components/HomeScreen";

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
      <StatusBar />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
