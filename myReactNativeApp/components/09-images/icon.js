import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import MCIcon from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import globalStyles from "../../assets/styles/globalStyles";

const Icon = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Icon</Text>
      <MCIcon
        name={Platform.OS === "ios" ? "magnify-scan" : "cards-spade"}
        size={50}
        color="blue"
      />

      {Platform.OS === "ios" ? (
        <Feather name="life-buoy" size={55} />
      ) : (
        <MCIcon name="freebsd" size={55} />
      )}
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
