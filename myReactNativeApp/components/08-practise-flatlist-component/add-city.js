import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const AddCity = ({ addCity }) => {
  const [city, setCity] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Where are you?"
        value={city}
        onChangeText={(text) => setCity(text)}
        style={styles.inputCity}
      />
      <Button
        title="ADD"
        color="red"
        onPress={(e) => {
          addCity(city);
          setCity("");
        }}
      />
    </View>
  );
};

export default AddCity;

const styles = StyleSheet.create({
  inputCity: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
