import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from "../../assets/styles/globalStyles";
import bg from "../../assets/img/bg.jpg";

const BackgroundImage = () => {
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <Text style={styles.message}>Background Image </Text>
      </ImageBackground>
      

    </View>
  )
}

export default BackgroundImage

const styles = StyleSheet.create({
    bg:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    message:{
      fontSize:20
    }
})