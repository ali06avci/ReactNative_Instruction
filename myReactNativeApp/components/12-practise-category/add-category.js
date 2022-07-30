import { Alert, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import IconButton from "../common/icon-button";
import Spacer from "../common/spacer";

const AddCategory = (props) => {
  const { modalVisible, setModalVisible, setCategories } = props;

  const [categoryName, setCategoryName] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");

  const addCategory = () => {
    if (!categoryName || !categoryDesc) {
      Alert.alert("Attention!", "Please fill all fields", [{ text: "Ok" }]);
      return;
    }

    const newCategory = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      title: categoryName,
      desc: categoryDesc,
    };

    setCategories((prev) => [newCategory, ...prev]);

    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        // android cihazlarda back button a tıklandığında burası çalışır.
        setModalVisible(false);
      }}
    >
      <View style={styles.container}>
        <Text>New Category</Text>
        <Spacer height={20} />
        <TextInput
          placeholder="Category name"
          style={styles.input}
          value={categoryName}
          onChangeText={(text) => setCategoryName(text)}
        />
        <Spacer height={10} />
        <TextInput
          placeholder="Category description"
          style={styles.input}
          value={categoryDesc}
          onChangeText={(text) => setCategoryDesc(text)}
        />
        <Spacer height={20} />
        <View style={styles.buttons}>
          <IconButton
            title="Back"
            icon="close"
            onPress={() => setModalVisible(false)}
          />
          <IconButton title="Add" icon="plus" onPress={addCategory} />
        </View>
      </View>
    </Modal>
  );
};

export default AddCategory;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomColor: "#ececec",
    borderBottomWidth: 1,
    padding: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
