import React from "react";
import { View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

function index() {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        height: height * 0.1,
        marginBottom: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ borderRadius: 8 }}>
        <Text
          style={{
            color: "white",
            backgroundColor: "#7849F7",
            fontSize: 15,
            fontWeight: "bold",
            paddingVertical: 16,
            paddingHorizontal: "35%",
          }}
        >
          Sepete Ekle
        </Text>
      </View>
    </View>
  );
}

export default index;
