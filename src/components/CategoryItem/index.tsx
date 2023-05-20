import React from "react";
import { TouchableOpacity, Text, Image, Dimensions } from "react-native";
import { Category } from "../../models";

import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window"); // to make it responsive we take the dimensions of the window screen
type categoryItemProps = {
  item: Category;
};

function Index({ item }: categoryItemProps) {
  const navigation = useNavigation(); // for onPress we created navigation to CategoryDetail which screens in HomeNavigator
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetails", { category: item })} // we call CategoryDetails here when we click item to navigate // {category:item} which item click to send categoryDetails screen. In categoryFiltering if you click to icecream make there underline
      style={{
        width: width * 0.25,
        height: width * 0.25,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <Image
        style={{
          width: width * 0.18,
          height: width * 0.18,
          borderRadius: 8,
        }}
        source={{ uri: item.src }}
      />
      <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default Index;
