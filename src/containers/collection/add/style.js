import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
  container: {
    elevation: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: "row",
    paddingVertical: 20,
    // alignItems: "stretch",
    marginBottom: 12
  },
  title: {
    fontSize: 24,
    color: "#111",
    fontWeight: "bold"
  },
  text_create: {
    fontSize: 21,
    color: "#fff",
    fontWeight: "bold"
  },
  btn_create: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#ddd",
    backgroundColor: "#f1f1f1",
    paddingVertical: 24,
    paddingHorizontal: 19,
    marginBottom: 12
  },
  btn_collection: {
    backgroundColor: "rgba(0,0,0,.4)",
    paddingVertical: 18,
    flexDirection: "column"
  },
  count_photos: {
    color: "#fff",
    fontSize: 12
  },
  cover_photo: {
    position: "absolute",
    height: 80,
    opacity: 0.3,
    width: width
  }
});
