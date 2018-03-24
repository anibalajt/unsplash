/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, ScrollView } from "react-native";
import { getListPhotos } from "./utils/Unsplash";
import Photo from "./components/photo/index";

export default class App extends Component {
  state = {
    photos: []
  };
  componentDidMount() {}
  componentWillMount() {
    this.getPhotos();
  }
  getPhotos = async () => {
    const photos = await getListPhotos("photos/");
    this.setState({ photos });
  };
  handleViewProfile = username => {
    this.props.navigation.navigate("profile", { username });
  };
  render() {
    const { photos } = this.state;

    return (
      <ScrollView style={styles.container}>
        {photos.map((item, i) => (
          <Photo
            handleViewProfile={this.handleViewProfile}
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
