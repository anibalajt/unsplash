/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  View,
  StyleSheet,
  Text,
  ScrollView,
  ListView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { getPhotos } from "./utils/Unsplash";
import Photo from "./components/photo/index";
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

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
    photos: [],
    per_page: 15,
    page: 1,
    dataSource: false
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
    const { per_page, page } = this.state;

    this.getPhotos(page, per_page, order_by);
  }
  getPhotos = async (page, per_page, order_by) => {
    let photos = await getPhotos("photos/", page, per_page, order_by);
    photos = photos.concat(this.state.photos);

    let dataSource = ds.cloneWithRows(photos);
    this.setState({ photos, dataSource });
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
  EndReached = () => {
    console.log("EndReached");
    let { per_page, page, order_by } = this.state;
    per_page += 15;
    page += 1;
    this.setState({
      per_page,
      page,
      order_by
    });
    this.getPhotos(page, per_page, order_by);
  };
  render() {
    const { dataSource } = this.state;
    return (
      <View style={styles.container}>
        {dataSource ? (
          <ListView
            initialListSize={15}
            removeClippedSubviews={false}
            dataSource={dataSource}
            onEndReached={this.EndReached}
            renderRow={(item, i) => {
              return (
                <Photo
                  handleViewProfile={this.handleViewProfile}
                  handleDownload={this.handleDownload}
                  handleAddCollection={this.handleAddCollection}
                  item={item}
                  key={i}
                />
              );
            }}
          />
        ) : null}
      </View>
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
