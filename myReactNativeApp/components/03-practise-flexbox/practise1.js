import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Practise1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TechproEducation</Text>
        <Button title="..." color="#333333" />
      </View>
      <View style={styles.content}>
        <View style={styles.image1}></View>

        <Text style={styles.desc}>
          <Text style={{fontWeight:"bold"}}>Lorem ipsum</Text> dolor, sit amet consectetur adipisicing elit. Dicta
          pariatur delectus quas nam non consectetur iste quam nisi ad deserunt
          eligendi sint rem exercitationem adipisci explicabo, dolor libero
          alias! Odio!
        </Text>

        <View style={styles.imgContainer}>
          <View style={styles.image2}></View>
          <View style={styles.image3}></View>
        </View>

      </View>
      <View style={styles.footer}>
        <Button title="Tab1" color="#333333" />
        <Button title="Tab2" color="#333333" />
        <Button title="Tab3" color="#333333" />
      </View>
    </View>
  );
};

export default Practise1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "orange",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 25,
    color: "white",
  },
  footer: {
    backgroundColor: "orange",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    padding:20,
  },
  image1:{
    backgroundColor:"gray",
    width:"100%",
    height:150
  },
  desc:{
    marginVertical: 20,
    fontSize: 17
  },
  imgContainer:{
    flexDirection:"row"
  },
  image2:{
    backgroundColor:"gray",
    height:150,
    flex:2
  },
  image3:{
    backgroundColor:"gray",
    height:150,
    flex:3,
    marginLeft:20
  }
});
