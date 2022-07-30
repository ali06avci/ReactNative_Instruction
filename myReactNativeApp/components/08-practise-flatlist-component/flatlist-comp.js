import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AddCity from "./add-city";
import CityList from "./city-list";

const FlatListComp = () => {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  return (
    <View style={styles.container}>
      <AddCity addCity={addCity} />
      <CityList cities={cities} />
    </View>
  );
};

export default FlatListComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
});
