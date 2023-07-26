import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text } from "react-native";

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{ color: "white" }}>Hello world</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
