import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FAB from "../common/fab";
import Categories from "./categories";
import AddCategory from "./add-category";

const CategoryManager = () => {
  const [categories, setCategories] = useState([
    {
      id:"1",
      title: "Çerezler",
      desc: "Fındık, fıstık, leblebi",
    },
    {
      id:"2",
      title: "Meyveler",
      desc: "Elma, armut, ayva, mandalina",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Categories categories={categories} setCategories={setCategories} />
      <AddCategory
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setCategories={setCategories}
      />
      <FAB onPress={() => setModalVisible(true)} />
    </View>
  );
};

export default CategoryManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
