import React, { useState, useEffect } from "react";
import { Products } from "../../models";
import { ActivityIndicator, View, Text, ScrollView } from "react-native";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperties from "../../components/DetailProperties";
import CardButton from "../../components/CardButton";

function index(props) {
  const [product, setProduct] = useState<Products>();
  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  console.log("Our product:", product);
  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <ImageCarousel images={product.images} />

        {/* <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            color: "#808B99",
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          Detaylar
        </Text> */}
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        {/* <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 14,
            color: "gray",
            fontWeight: "600",
          }}
        >
          Detaylar
        </Text> */}
        {/* <Text> -Çikolatalı ve vanilyalıdır.</Text> */}
        <DetailProperties />
        <Text style={{ paddingTop: 10, paddingLeft: 10, fontSize: 12 }}>
          Su, şeker tereyağ(süt ürünü), kakao kitlesi, kakao yağı, yağsız süt
          tozu,glıkoz-fruktoz şurubu,peynir altı suyu tozu,tam yağlı süt tozu.
        </Text>
      </ScrollView>
      <CardButton />
    </View>
  );
}

export default index;
