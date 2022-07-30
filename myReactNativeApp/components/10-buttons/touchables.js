import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import globalStyles from "../../assets/styles/globalStyles";

const Touchables = () => {
  const sendMessage = () => {
    console.log("ok");
  };

  return (
    <View style={globalStyles.container}>
      <TouchableHighlight
        onPress={sendMessage}
        style={styles.button}
        underlayColor="blue"
      >
        <Text>Touchable Highlight</Text>
      </TouchableHighlight>


      <TouchableOpacity
        onPress={sendMessage}
        style={styles.button}
        activeOpacity={0.4}
      >
        <Text>Touchable Opacity</Text>
      </TouchableOpacity>


      <TouchableWithoutFeedback
        onPress={sendMessage}
      >
        <Text>Touchable Without Feedback</Text>
      </TouchableWithoutFeedback>



    </View>
  );
};

export default Touchables;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
