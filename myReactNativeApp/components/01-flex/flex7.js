import { View, Text } from "react-native";

const Flex7 = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        padding: 20,
        flexDirection:"row",
        flexWrap:"wrap"
      }}
    >
        <View style={{ backgroundColor: "green", width: 100, height: 100, marginRight:10, marginBottom:10 }}>
          <Text>S1</Text>
        </View>
        <View style={{ backgroundColor: "green", width: 100, height: 100, marginRight:10, marginBottom:10 }}>
          <Text>S1</Text>
        </View>
        <View style={{ backgroundColor: "green", width: 100, height: 100, marginRight:10, marginBottom:10 }}>
          <Text>S1</Text>
        </View>
        <View style={{ backgroundColor: "green", width: 100, height: 100 , marginRight:10, marginBottom:10}}>
          <Text>S1</Text>
        </View>
        <View style={{ backgroundColor: "green", width: 100, height: 100, marginRight:10, marginBottom:10 }}>
          <Text>S1</Text>
        </View>
        <View style={{ backgroundColor: "green", width: 100, height: 100, marginRight:10, marginBottom:10 }}>
          <Text>S1</Text>
        </View>
        <View style={{ backgroundColor: "green", width: 100, height: 100, marginRight:10, marginBottom:10 }}>
          <Text>S1</Text>
        </View>
        <View style={{ backgroundColor: "green", width: 100, height: 100, marginRight:10, marginBottom:10 }}>
          <Text>S1</Text>
        </View>
        <View style={{ backgroundColor: "green", width: 100, height: 100 , marginRight:10, marginBottom:10}}>
          <Text>S1</Text>
        </View>
    </View>
  );
};

export default Flex7;
