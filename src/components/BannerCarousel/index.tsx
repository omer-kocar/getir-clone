import React, { useState } from "react";
import { FlatList, Dimensions, Image } from "react-native";

function index() {
  const [banners, setBanners] = useState<String[]>([
    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
  ]);

  //   const onViewRef = React.useRef((viewableItems)=>{

  //   })

  const { width, height } = Dimensions.get("window");

  return (
    <FlatList
      data={banners}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{ width: width, height: height * 0.25 }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
    />
  );
}

export default index;
