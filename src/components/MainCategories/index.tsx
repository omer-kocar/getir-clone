import React, { useState } from "react";
import { View } from "react-native";
import CategoryItem from "../CategoryItem";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";
import { StyleSheet } from "react-native";

function index() {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View style={styles.listContainer}>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default index;
