import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../assets/styles/globalStyles";

const Flex9 = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <View style={[styles.button, {backgroundColor:"green"}]}>
        <Text style={styles.buttonText}>Section1</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Section2</Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Section3</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.button, styles.button4]}>
          <Text style={styles.buttonText}>Section4</Text>
        </View>

        <View style={[styles.button, { flex: 1, marginLeft: 5 }]}>
          <Text style={styles.buttonText}>Section5</Text>
        </View>
      </View>
    </View>
  );
};

export default Flex9;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    backgroundColor: "red",
    padding: 40,
    alignItems: "stretch",
  },
  button: {
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button4:{
    flex: 2, backgroundColor:"blue"
  }
});
