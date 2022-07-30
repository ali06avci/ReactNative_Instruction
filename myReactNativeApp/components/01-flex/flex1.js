import { View, Text } from "react-native";

const Flex1 = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,
        alignItems: "stretch",
      }}
    >
      <View
        style={{ backgroundColor: "green", alignItems: "center", padding: 10 }}
      >
        <Text>Section1</Text>
      </View>
      <View
        style={{ backgroundColor: "gray", alignItems: "center", padding: 10 }}
      >
        <Text>Section2</Text>
      </View>
      <View
        style={{ backgroundColor: "red", alignItems: "center", padding: 10 }}
      >
        <Text>Section3</Text>
      </View>
    </View>
  );
};

export default Flex1;
