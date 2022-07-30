import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "../common/icon-button";

const Categories = ({ categories, setCategories }) => {

  const deleteCategory = (id) => { 
    const newData = categories.filter( (cat)=> cat.id != id );
    setCategories(newData);


  }


  return (
    <View>
      <Text style={styles.title}>Kategoriler ({categories.length})</Text>

      <FlatList
        data={categories}
        keyExtractor={(item, index) => index}
        renderItem={(category) => (
          <View style={styles.category}>
            <View>
              <Text style={styles.name}>{category.item.title}</Text>
              <Text style={styles.desc}>{category.item.desc}</Text>
            </View>
            <IconButton
              icon="delete"
              buttonStyle={{ backgroundColor: "white" }}
              textStyle={{ color: "red" }}
              onPress={() => deleteCategory(category.item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
  },
  desc: {
    fontStyle: "italic",
  },
  title:{
    fontSize:25
  }
});
