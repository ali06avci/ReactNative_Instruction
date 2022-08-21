import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Flex1" onPress={() => navigation.navigate("Flex1")} />
      <Button title="Flex2" onPress={() => navigation.navigate("Flex2")} />
      <Button title="Flex3" onPress={() => navigation.navigate("Flex3")} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
