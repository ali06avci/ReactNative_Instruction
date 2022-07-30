import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from "../../assets/styles/globalStyles";
import twitterLogo from "../../assets/img/twitter-logo.png";

const LocalImportImage = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Local Image Import </Text>
      <Image style={styles.logo} source={twitterLogo} resizeMode="contain"/>
    </View>
  )
}

export default LocalImportImage

const styles = StyleSheet.create({
    logo:{
        width:150,
        height:150
    }
})