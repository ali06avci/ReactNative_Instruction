import { View, Text } from "react-native";

const Flex5 = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,
        flexDirection: "row",
        alignItems:"flex-end",
        justifyContent:"space-evenly"
      }}
    >
      <View
        style={{ backgroundColor: "green", alignItems: "center", padding: 10}}
      >
        <Text>Section1</Text>
      </View>
      <View
        style={{ backgroundColor: "gray", alignItems: "center", padding: 10}}
      >
        <Text>Section2</Text>
      </View>
      
    </View>
  );
};

export default Flex5;
