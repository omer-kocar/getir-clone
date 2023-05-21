import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Products } from "../../models";

type CartItemProps = {
  product: Products;
};

const { width, height } = Dimensions.get("window");

function index({ product }: CartItemProps) {
  return (
    <View style={{ borderBottomColor: "lightgray", borderBottomWidth: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image
          style={{
            height: height * 0.08,
            width: height * 0.08,
            borderColor: "lightgray",
            borderWidth: 0.3,
            borderRadius: 15,
            marginVertical: 12,
            marginBottom: 20,
            marginRight: 9,
            marginLeft: 20,
          }}
          source={{ uri: product.image }}
        />
        <View
          style={{
            height: height * 0.09,
            maxWidth: height * 0.13,
            flex: 1,
            // backgroundColor: "red",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          <Text style={{ fontWeight: "600" }}>{product.name}</Text>
          <Text style={{ color: "gray", paddingBottom: 10 }}>
            {product.miktar}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#5C3EBC" }}>
            <Text>{"\u20BA"}</Text>
            {product.fiyat}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: height * 0.037,
            width: width * 0.24,
            backgroundColor: "white",
            borderRadius: 9,
            marginRight: 14,
            alignItems: "center",
            justifyContent: "space-around",
            borderColor: "lightgray",
            borderWidth: 0.3,
            marginLeft: "18%",
            shadowColor: "#5C3EBC",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.15,
            shadowRadius: 5,
            elevation: 4,
          }}
        >
          <View>
            <Text
              style={{
                color: "#5C3EBC",
                fontWeight: "500",
                fontSize: 28,
                paddingLeft: 5,
                flex: 1,
              }}
            >
              -
            </Text>
          </View>
          <View>
            <Text
              style={{
                backgroundColor: "#5C3EBC",
                paddingHorizontal: 15,
                paddingVertical: 10,
                color: "white",
                fontWeight: "bold",
                fontSize: 12,
                flex: 1,
              }}
            >
              3
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#5C3EBC",
                fontWeight: "500",
                fontSize: 21,
                paddingRight: 5,
              }}
            >
              +
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default index;
