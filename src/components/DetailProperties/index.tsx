import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("window");

function index() {
  const [details, setDetails] = useState<string[]>([
    "Önerilen",
    "Detaylar",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek bilgiler",
  ]);

  const TextComponent = ({
    detail,
    active,
    setCat,
    index,
  }: {
    detail: string;
    active: string;
    setCat: any;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => setCat(details)}
        style={[
          {
            paddingHorizontal: 9,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={[
            {
              fontSize: 15,
              color: "gray",
              fontWeight: "600",
              textTransform: "capitalize",
            },
          ]}
        >
          {detail}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={{
        width: "100%",
        // backgroundColor: "#7849F7",
        backgroundColor: "#ffff",
        height: height * 0.055,
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {details.map((item, index) => (
        <TextComponent
          setCat={details}
          key={index}
          detail={item}
          active={details}
        />
      ))}
    </ScrollView>
  );
}

export default index;
