/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { getPhotos } from "./utils/Unsplash";
import Photo from "./components/photo/index";

export default class App extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    title: "home",
    tabBarIcon: (e, b) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case "home":
          iconName = "home";
          break;
        case "new":
          iconName = "image";
          break;
      }
      return (
        <Icon
          name={iconName}
          size={30}
          iconStyle={{ padding: 30 }}
          color="#999"
        />
      );
    }
  });
  state = {
    photos: []
  };
  componentDidMount() {}
  componentWillMount() {
    routeName = this.props.navigation.state.routeName;
    let order_by;
    switch (routeName) {
      case "home":
        order_by = "popular";
        break;
      case "new":
        order_by = "latest";
        break;
    }
    this.getPhotos(order_by);
  }
  getPhotos = async order_by => {
    const photos = await getPhotos("photos/", 0, 15, order_by);
    this.setState({ photos });
  };
  handleViewProfile = username => {
    this.props.navigation.navigate("profile", { username });
  };
  handleDownload = async id => {
    // const photos = await getPhotos(`photos/${id}/download`);
    console.log("photos:", id);
  };
  handleAddCollection = async id => {
    // const photos = await getPhotos(`photos/${id}/download`);
    this.props.navigation.navigate("add_to_collection", { id });
  };
  render() {
    const { photos } = this.state;

    return (
      <ScrollView style={styles.container}>
        {photos.map((item, i) => (
          <Photo
            handleViewProfile={this.handleViewProfile}
            handleDownload={this.handleDownload}
            handleAddCollection={this.handleAddCollection}
            item={item}
            key={i}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
