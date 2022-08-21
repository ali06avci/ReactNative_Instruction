import { Button, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import globalStyles from "../../assets/styles/globalStyles";
const MyAlert = () => {
  const showMessage = () => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <View style={globalStyles.container}>
      <Text>MyAlert</Text>
      <Button title="Click Me" onPress={showMessage} />
    </View>
  );
};
export default MyAlert;
const styles = StyleSheet.create({});
