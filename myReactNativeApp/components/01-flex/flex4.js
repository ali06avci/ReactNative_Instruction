import { View, Text } from "react-native";

const Flex4 = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,
        flexDirection: "row",
        alignItems:"flex-start",
      }}
    >
      <View
        style={{ backgroundColor: "green", alignItems: "center", padding: 10, flex:1}}
      >
        <Text>Section1</Text>
      </View>
      <View
        style={{ backgroundColor: "gray", alignItems: "center", padding: 10, flex:3}}
      >
        <Text>Section2</Text>
      </View>
      <View
        style={{ backgroundColor: "red", alignItems: "center", padding: 10, flex:1}}
      >
        <Text>Section3</Text>
      </View>
    </View>
  );
};

export default Flex4;
