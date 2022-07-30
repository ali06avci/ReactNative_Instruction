import { View, Text } from "react-native";

const Flex6 = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        padding:20,
        justifyContent:"space-between"
      }}
    >
      
      <View style={{flexDirection:"row"}}>
        <View style={{backgroundColor: "green", flex:1, marginRight:10}}><Text>S1</Text></View>
        <View style={{backgroundColor: "gray", flex:2}}><Text>S2</Text></View>
      </View>
      
      
      <View style={{flexDirection:"row"}}>
        <View style={{backgroundColor: "gray", flex:2, marginRight:10}}><Text>S3</Text></View>
        <View style={{backgroundColor: "green", flex:1}}><Text>S4</Text></View>
      </View>
      
    </View>
  );
};

export default Flex6;
