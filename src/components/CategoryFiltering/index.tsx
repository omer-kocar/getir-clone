import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";

const { height, width } = Dimensions.get("window");

const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  // repeat this and focus where the item parameter comes and how is the the structure of this fuchtion // Category comes from models/index.tsx
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          flexDirection: "row",
          alignItems: "center",
        },
        item.name == active.name && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2,
        },
      ]}
    >
      <Text style={{ color: "#ffff", fontWeight: "600" }}>{item.name}</Text>
    </View>
  );
};

function index({ category }: { category: Category }) {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  //   console.log(categories);
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.055,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item) => (
        // <Text key={item.id}>{item.name}</Text>
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
}

export default index;
