import React from "react";
import { View, Text } from "react-native";
import ProductItem from "../ProductItem";
import productsGetir from "../../../assets/productsGetir";

function index() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffff",
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text
        style={{
          flexDirection: "row",
          paddingBottom: 10,
          marginLeft: 18,
          paddingTop: 10,
          color: "gray",
          fontWeight: "600",
        }}
      >
        Cubuk
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "#ffff",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default index;
