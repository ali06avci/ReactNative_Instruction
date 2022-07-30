import { View, Text, StyleSheet } from "react-native";

const Internal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Bu bir internal stildir</Text>
      <Text style={styles.message}>Bu da ikinci satır</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    message:{
        fontSize:34,
        color: "white"
    }
});



export default Internal;
