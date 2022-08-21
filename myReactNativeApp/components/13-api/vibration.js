import { StyleSheet, Text, View, Button, Vibration } from "react-native";
import globalStyles from "../../assets/styles/globalStyles";
import React from "react";

const MyVibration = () => {
  const handleVibration = () => {
    Vibration.vibrate(20000);
  };
  const stopVibration = () => {
    Vibration.cancel();
  };
  return (
    <View style={globalStyles.container}>
      <Button title="Vibration" onPress={handleVibration} />

      <Button title="Stop Vibration" onPress={stopVibration} />
    </View>
  );
};

export default MyVibration;
const styles = StyleSheet.create({});
