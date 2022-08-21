import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import globalStyles from "../../assets/styles/globalStyles";
const screen = Dimensions.get("window");
console.log(screen);
const MyDimensions = () => {
  return (
    <View style={[styles.container]}>
      <Text>Font Scale: {screen.fontScale}</Text>
      <Text>Width: {screen.width}</Text>
      <Text>Height: {screen.height}</Text>
      <Text>Scale: {screen.scale}</Text>
    </View>
  );
};
export default MyDimensions;
const styles = StyleSheet.create({
  container: {
    width: screen.width - 50,
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
  },
});
