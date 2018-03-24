import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
  container: {
    elevation: 1,
    flexDirection: "column",
    backgroundColor: "#fff",

    paddingVertical: 10
  },
  header: {
    marginHorizontal: 10
  },
  imgProfile: {
    borderRadius: 140,
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 10
  },
  name: {
    color: "#000",
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold"
  },
  textInfo: {
    marginBottom: 8,
    fontSize: 16,
    color: "#999"
  },
  textBio: {
    marginVertical: 10,
    marginBottom: 14,
    color: "#111"
  },
  contentRow: {
    flexDirection: "row",
    marginBottom: 20
  },
  contentColumn: {
    flexDirection: "column",
    marginTop: 60,
    marginRight: 40
  },
  textTotal: {
    // textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  }
});
