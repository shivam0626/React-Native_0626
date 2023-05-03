import React from "react";
import Task from "./components/Task";
import {View ,StyleSheet} from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
     <Task />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
