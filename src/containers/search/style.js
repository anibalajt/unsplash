import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
  container: {
    elevation: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  header: {
    marginHorizontal: 10
  },
  conten_input: {
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    paddingHorizontal: 20
  },
  input: {
    fontSize: 18,
    flex: 1,
    borderColor: "transparent"
  },
  cancel: {
    fontSize: 16,
    color: "#999"
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold"
  },
  contentRow: {
    flexDirection: "row",
    marginBottom: 20
  },
  contentColumn: {
    flexDirection: "column",
    marginTop: 40,
    marginRight: 40
  },
  textInfo: {
    marginBottom: 8,
    fontSize: 16,
    color: "#999"
  },
  textTotal: {
    // textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
  content_related: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    width: 130
  },
  image_related: {
    opacity: 0.7,
    position: "absolute",
    width: 120,
    height: 40
  },
  title_related: {

    color: "#111",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  }
});
