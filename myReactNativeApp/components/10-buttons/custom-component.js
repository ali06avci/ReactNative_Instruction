import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../assets/styles/globalStyles";
import IconButton from "../common/icon-button";

const CustomComponent = () => {
  return (
    <View style={globalStyles.container}>
      <IconButton
        title="Click me"
        icon="home-automation"
        onPress={()=>alert("Hello")}
        
      />
    </View>
  );
};

export default CustomComponent;

const styles = StyleSheet.create({});
