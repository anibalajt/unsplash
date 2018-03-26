/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { View, Text, ScrollView, Image, ListView } from "react-native";
import { getProfile, getPhotos } from "../../utils/Unsplash";
import Tags from "../../components/tags/index";
import Photo from "../../components/photo/index";

import {
  imgProfile,
  container,
  name,
  textInfo,
  textBio,
  contentRow,
  contentColumn,
  header,
  textTotal
} from "./style";
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Profile extends Component {
  static navigationOptions = {
    header: null,
    title: "user",
    tabBarIcon: () => {
      return <Icon name="user" size={25} color="#999" />;
    },
    tabBarOnPress: (scene, jumpToIndex) => {
      // console.log("onPress:", scene.route);
      // jumpToIndex(scene.index);
    }
  };
  state = {
    user: {},
    photos: [],
    per_page: 15,
    page: 1,
    dataSource: false
  };
  async componentWillMount() {
    // users/neonbrand/photos
    const { params } = this.props.navigation.state;
    const { username } = params;
    const user = await getProfile(username);

    this.setState({ user });

    const { per_page, page } = this.state;

    this.getPhotos(page, per_page, null, username);
  }
  getPhotos = async (page, per_page, order_by, username) => {
    console.log(`users/${username}/photos/`);
    let photos = await getPhotos(
      `users/${username}/photos/`,
      page,
      per_page,
      order_by
    );
    photos = photos.concat(this.state.photos);
    let dataSource = ds.cloneWithRows(photos);
    this.setState({ photos, dataSource });
  };
  async componentWillReceiveProps() {
    const { params } = this.props.navigation.state;
    // this.setState({ user: [], photos: [] });
    console.log(params);
    if (params) {
      const { username } = params;
      const user = await getProfile(username);
      const photos = await getPhotos(`users/${username}/photos`);

      this.setState({ user, photos });
    }
  }
  EndReached = () => {
    console.log("EndReached");
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
    console.log("render");
    const {
      dataSource,
      user: {
        profile_image,
        first_name,
        last_name,
        location,
        portfolio_url,
        bio,
        tags,
        total_collections,
        total_likes,
        total_photos
      }
    } = this.state;

    return (
      <ScrollView style={container}>
        {profile_image ? (
          <View>
            <View style={header}>
              {profile_image ? (
                <Image
                  style={imgProfile}
                  source={{ uri: profile_image.large }}
                />
              ) : null}

              <Text style={name}>
                {first_name} {last_name}
              </Text>
              {location ? <Text style={textInfo}>{location}</Text> : null}

              {portfolio_url ? (
                <Text style={textInfo}>{portfolio_url}</Text>
              ) : null}
              {bio ? <Text style={textBio}>{bio}</Text> : null}
              {tags && tags.custom.length > 0 ? (
                <View>
                  <Text style={textInfo}>interests</Text>
                  <View style={contentRow}>
                    {tags.custom.map((t, i) => (
                      <Tags key={i} title={t.title} />
                    ))}
                  </View>
                </View>
              ) : null}
              <View style={contentRow}>
                <View style={contentColumn}>
                  <Text style={textTotal}>{total_photos}</Text>
                  <Text style={textInfo}>Photos</Text>
                </View>
                <View style={contentColumn}>
                  <Text style={textTotal}>{total_likes}</Text>
                  <Text style={textInfo}>Liked</Text>
                </View>
                <View style={contentColumn}>
                  <Text style={textTotal}>{total_collections}</Text>
                  <Text style={textInfo}>Collections</Text>
                </View>
              </View>
            </View>
            {dataSource ? (
              <ListView
                initialListSize={15}
                removeClippedSubviews={false}
                dataSource={dataSource}
                onEndReached={this.EndReached}
                renderRow={(item, i) => (
                  <Photo
                    handleViewProfile={this.handleViewProfile}
                    handleDownload={this.handleDownload}
                    handleAddCollection={this.handleAddCollection}
                    item={item}
                    key={i}
                  />
                )}
              />
            ) : null}
          </View>
        ) : (
          <Text>cargando..</Text>
        )}
      </ScrollView>
    );
  }
}
