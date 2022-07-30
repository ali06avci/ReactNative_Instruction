import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from "../../assets/styles/globalStyles";

const LocalRequireImage = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Local Image Require </Text>
      <Image style={styles.logo} source={require('../../assets/img/twitter-logo.png')} resizeMode="contain"/>
    </View>
  )
}

export default LocalRequireImage

const styles = StyleSheet.create({
    logo:{
        width:150,
        height:150
    }
})