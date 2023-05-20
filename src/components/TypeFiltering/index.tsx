import React, { useState } from "react";
import { Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";

const { height, width } = Dimensions.get("window");

const TypeBox = (
  { item, active, setCat } = { setCat: any, item: string, active: string }
) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
          borderRadius: 6,
          height: height * 0.044,
          marginRight: 12,
        },
        item == active
          ? { backgroundColor: "#5C3EBC" }
          : { borderColor: "#F0EFF7", borderWidth: 1 },
      ]}
    >
      <Text
        style={[
          {
            fontSize: 12,
            color: "#7849F7",
            fontWeight: "600",
            textTransform: "capitalize",
          },
          item == active && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

function index() {
  const [category, setCategory] = useState<String>("cubuk");
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "white",
        height: height * 0.072,
        flexDirection: "row",
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderBottomColor: "lightgray",
        borderBottomWidth: "1",
      }}
      showsHorizontalScrollIndicator={false}
      //   bounces={true}
      horizontal={true}
    >
      {[
        "İlginizi Çekebilecekler",
        "cubuk",
        "Bar",
        "Kulah",
        "Dondurma Paketleri",
        "Coklu",
        "Kutu",
      ].map((item) => (
        <TypeBox setCat={setCategory} item={item} active={category} />
      ))}
    </ScrollView>
  );
}

export default index;
