import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.054,
    backgroundColor: "#FFD300",
  },
  headerOne: {
    height: height * 0.054,
    width: "80%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 27,
    height: 27,
  },
  headerTwo: {
    height: height * 0.054,
    width: "20%",
    left: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
