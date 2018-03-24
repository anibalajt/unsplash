import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    marginRight: 8,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    marginTop: 10
  }
});
