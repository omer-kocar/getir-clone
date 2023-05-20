import React from "react";
import { View, Text } from "react-native";

type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
};
function index({ price, name, quantity }: DetailBoxProps) {
  return (
    <View
      style={{
        width: "100%",
        height: 110,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 15,
      }}
    >
      <Text
        style={{
          color: "#5D3EBD",
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: -8,
        }}
      >
        <Text style={{ fontSize: 19 }}>{"\u20BA"}</Text>
        {price}
      </Text>
      <Text style={{ paddingTop: 12, fontWeight: "600", fontSize: 16 }}>
        {name}
      </Text>
      <Text
        style={{
          paddingTop: 5,
          fontSize: 16,
          fontWeight: "500",
          color: "gray",
        }}
      >
        {quantity}
      </Text>
    </View>
  );
}

export default index;
