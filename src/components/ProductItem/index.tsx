import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Products } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

type ProductItemType = {
  item: Products;
};

function index({ item }: ProductItemType) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={{
        width: width * 0.28,
        height: height * 0.23,
        marginTop: 18,
        marginLeft: 12,
        marginRight: 8,

        // backgroundColor: "red",
      }}
    >
      <Image
        style={{
          height: width * 0.28,
          width: width * 0.28,
          borderWidth: 0.15,
          borderRadius: 12,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 11,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            // color: "#7849F7",
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#5D3EBD",
            marginLeft: 4,
            fontSize: 15,
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontWeight: "500", fontSize: 14, marginTop: 8 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          marginTop: 3,
          fontWeight: "500",
          fontSize: 13,
        }}
      >
        {item.miktar}
      </Text>
      <View
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.1,
          borderRadius: 8,
          borderColor: "#5D3EBD",
          backgroundColor: "#ffff",
          position: "absolute",
          right: -10,
          top: -7,
          alignItems: "center",
          justifyContent: "center",
          shadowOpacity: 0.25,
          shadowRadius: 3.04,
          shadowColor: "#5D3EBD",
        }}
      >
        <Entypo
          name="plus"
          size={20}
          style={{
            color: "#5D3EBD",
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default index;
