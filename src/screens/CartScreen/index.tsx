import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";

const { width, height } = Dimensions.get("window");
function index() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        // style={{ backgroundColor: "red" }}
        data={productsGetir.slice(2, 4)}
        renderItem={({ item }) => <CartItem product={item} />}
      />

      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          backgroundColor: "#ffff",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.055,
            flex: 3.5,
            backgroundColor: "#5D3EBD",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1.5,
            backgroundColor: "#ffff",
            height: height * 0.055,
            borderBottomRightRadius: 8,
            borderTopRightRadius: 8,
            shadowColor: "#5C3EBC",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.4,
            shadowRadius: 5,
            elevation: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "#5C3EBC",
              flexDirection: "row",
            }}
          >
            <Text>{"\u20BA"}</Text>
            22,55
          </Text>
        </View>
      </View>
    </View>
  );
}

export default index;
