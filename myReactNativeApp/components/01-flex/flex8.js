import { View, Text } from "react-native";

const Flex8 = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        padding: 20,
        alignItems: "flex-end",
      }}
    >
      <View style={{ backgroundColor: "green", alignSelf: "center" }}>
        <Text>S1</Text>
      </View>
      <View style={{ backgroundColor: "green", alignSelf: "stretch" }}>
        <Text>S1</Text>
      </View>
      <View style={{ backgroundColor: "green" }}>
        <Text>S1</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          alignSelf: "flex-start",
        }}
      >
        <Text>S1</Text>
      </View>
    </View>
  );
};

export default Flex8;
