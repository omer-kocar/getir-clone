import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 15,
              color: "#5D3EBD",
              marginLeft: 5,
            }}
          >
            Ev,
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 13,
              marginLeft: 6,
              marginRight: 25,
            }}
          >
            Dedepasa Blv. Yenisehir Mahallesi...
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={22}
            color="#5D3EBD"
          />
        </View>
        <View style={styles.headerTwo}>
          <Text
            style={{
              fontSize: 10,
              color: "#5D3EBD",
              fontWeight: "bold",
              marginBottom: -2,
            }}
          >
            TVS
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#5D3EBD",
                letterSpacing: 2,
              }}
            >
              15{" "}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginBottom: -4,
                marginLeft: -8,
                fontWeight: "bold",
                color: "#5D3EBD",
              }}
            >
              dk
            </Text>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default index;
