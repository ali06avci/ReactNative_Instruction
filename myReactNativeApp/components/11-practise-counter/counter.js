import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Board from "./board";
import Toolbar from "./toolbar";
import Spacer from "../common/spacer";

const Counter = () => {
  const [counterVal, setCounterVal] = useState(0);


  return (
    <View style={styles.container}>
      <Board counterVal={counterVal}/>
      <Spacer />
      <Toolbar setCounterVal={setCounterVal}/>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
