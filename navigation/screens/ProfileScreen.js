import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import BottomSheet from "reanimated-bottom-sheet";

const ProfileScreen = () => {
  const sheetRef = useRef(null);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.headerButton}></View>
    </View>
  );

  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.titles}>
        <Text style={styles.mainTitle}>Upload Photo</Text>
        <Text style={styles.subTitle}>Chose your profile picture</Text>
      </View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Chose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Button title="Open" onPress={()=>sheetRef.current.snapTo(0)}/>
        <Button title="Close" onPress={()=>sheetRef.current.snapTo(1)} />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 50]}
        initialSnap={0}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingTop: 30,
    backgroundColor: "#efefef",
  },
  headerContainer: {
    alignItems:"center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop:20
  },
  headerButton: {
    width: 100,
    height: 8,
    backgroundColor: "gray",
    borderRadius:5
  },
  content: {
    padding:20,
    backgroundColor: "white",
    height:"100%"
  },
  titles:{
    alignItems:"center",
    marginBottom:20
  },
  mainTitle:{
    fontSize:25,
    color:"#da3f18"
  },
  subTitle:{
    fontSize:15,
    color:"gray"
  },
  button:{
    backgroundColor:"#da3f18",
    padding:10,
    borderRadius:10,
    marginVertical:5,
    alignItems:"center"

  },
  buttonText:{
    color:"white",
    fontSize:15,
    fontWeight:"bold"
  }
});
