import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../assets/styles/globalStyles";

const Mixed = () => {
  return (
    <View style={globalStyles.container}>
      <Text
        style={[globalStyles.message, styles.message, { color: "#22aaff" }]}
      >
        Mixed
      </Text>
    </View>
  );
};

export default Mixed;

const styles = StyleSheet.create({
  message: {
    color: "#00ff34",
  },
});
