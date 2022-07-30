import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../assets/styles/globalStyles";

const Prsbl = () => {
  return (
    <View style={globalStyles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressedButton] : styles.button
        }
      >
        {({ pressed }) =>
          pressed ? <Text>Clicked</Text> : <Text>Click Me</Text>
        }
      </Pressable>
    </View>
  );
};

export default Prsbl;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  pressedButton: {
    backgroundColor: "blue",
    opacity: 0.4,
  },
});
