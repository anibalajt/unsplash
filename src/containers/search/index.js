/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Photo from "../../components/photo/index";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import { getProfile, getPhotos } from "../../utils/Unsplash";

import {
  container,
  header,
  title,
  conten_input,
  input,
  cancel,
  contentRow,
  contentColumn,
  textTotal,
  textInfo,
  image_related,
  title_related,
  content_related
} from "./style";

export default class Search extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    title: "search",
    tabBarIcon: (e, b) => {
      return <Icon name="search" size={25} color="#999" />;
    }
  });
  state = {
    photos: [],
    query: "",
    total_users: 0,
    total_collections: 0,
    total_photos: 0,
    related_searches: []
  };
  async componentWillMount() {
    const { params } = this.props.navigation.state;
    const { query } = params;
    // const query = "women";
    this.search(query);
  }
  search = async query => {
    const response = await getPhotos(`/search/`, 1, 15, "", query);

    this.setState({
      related_searches: response.related_searches,
      photos: response.photos.results,
      query,
      total_users: response.users.total,
      total_collections: response.collections.total,
      total_photos: response.photos.total
    });
  };
  handleViewProfile = username => {
    this.props.navigation.navigate("profile", { username });
  };
  handleDownload = async id => {
    console.log("photos:", id);
  };
  handleAddCollection = async id => {
    this.props.navigation.navigate("add_to_collection", { id });
  };
  render() {
    const {
      photos,
      query,
      total_users,
      total_collections,
      total_photos,
      related_searches
    } = this.state;
    return (
      <ScrollView style={container}>
        <View style={header}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            initialNumToRender={4}
            horizontal={true}
            data={related_searches}
            renderItem={({ item }, i) => (
              <TouchableWithoutFeedback onPress={e => this.search(item.title)}>
                <View key={i} style={content_related}>
                  <Image style={image_related} source={{ uri: item.url }} />
                  <Text style={title_related}>{item.title}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
          <Text style={title}>{query}</Text>
          <View style={contentRow}>
            <View style={contentColumn}>
              <Text style={textTotal}>11</Text>
              <Text style={textInfo}>Photos</Text>
            </View>
            <View style={contentColumn}>
              <Text style={textTotal}>{total_collections}</Text>
              <Text style={textInfo}>Collections</Text>
            </View>
            <View style={contentColumn}>
              <Text style={textTotal}>{total_users}</Text>
              <Text style={textInfo}>Users</Text>
            </View>
          </View>
        </View>
        <FlatList
          initialNumToRender={4}
          data={photos}
          renderItem={({ item, i }) => {
            return (
              <Photo
                key={item.id}
                handleViewProfile={this.handleViewProfile}
                handleDownload={this.handleDownload}
                handleAddCollection={this.handleAddCollection}
                item={item}
              />
            );
          }}
        />
      </ScrollView>
    );
  }
}
