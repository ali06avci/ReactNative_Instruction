import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const PractiseScrollView = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const addCity = () => {
    setCities([...cities, city]);
    setCity("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Where are you?"
        value={city}
        onChangeText={(text) => setCity(text)}
        style={styles.inputCity}
      />
      <Button title="ADD" color="red" onPress={addCity} />

      <ScrollView style={styles.list}>
        {cities.map((item, index) => (
          <Text style={styles.listItem} key={index}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default PractiseScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  inputCity: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    backgroundColor: "#ededed",
    padding: 10,
    borderRadius: 10,
    marginBottom:10
  },
});
