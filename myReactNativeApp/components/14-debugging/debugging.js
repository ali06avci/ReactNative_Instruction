import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Debugging = () => {
  let toplam = 0;
  for (var i = 1; i <= 10; i++) {
    toplam += i;
  }
  console.log(toplam);

  return (
    <View>
      <Text>Debugging....</Text>
    </View>
  );
};

export default Debugging;

const styles = StyleSheet.create({});
