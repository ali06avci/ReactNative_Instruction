import { View, Text } from "react-native";

const Flex2 = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,
  
      }}
    >
      <View
        style={{ backgroundColor: "green", alignItems: "center", padding: 10, flex:1 }}
      >
        <Text>Section1</Text>
      </View>
      <View
        style={{ backgroundColor: "gray", alignItems: "center", padding: 10, flex:2 }}
      >
        <Text>Section2</Text>
      </View>
      <View
        style={{ backgroundColor: "red", alignItems: "center", padding: 10, flex:3  }}
      >
        <Text>Section3</Text>
      </View>
    </View>
  );
};

export default Flex2;
