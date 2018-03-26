import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
  container: {
    elevation: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    marginBottom: 20,
    paddingVertical: 10
  },
  content_autor: {
    flexDirection: "row",
    marginBottom: 10
  },
  c_name_autor: {
    // flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  c_img_autor: {
    marginHorizontal: 10,
    borderRadius: 50,
    width: 50,
    height: 50
  },
  name: {
    fontSize: 18,
    color: "#515558"
  },
  hours_style: {
    color: "#b9c1c7",
    fontSize: 12
  },
  content_photo: {},
  photo: {
    width: width,
    minHeight: 300
    // resizeMode: "center"
  },
  photo_activity: {
    flexDirection: "row",
    alignItems: "stretch",
    paddingTop: 10,
    paddingHorizontal: 10
  },
  content_photo_like: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // width: 70,
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 3,
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1
  },
  photo_like: {
    paddingLeft: 10,
    fontSize: 18,
    color: "#999"
  }
});
