/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { getProfile, getListPhotos } from "../../utils/Unsplash";
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

export default class Profile extends Component {
  state = { user: {}, photos: [] };
  async componentWillMount() {
    // users/neonbrand/photos
    const { params } = this.props.navigation.state;
    const { username  } = params;
    // const username = "petebellis";
    const user = await getProfile(username);
    console.log(user);

    const photos = await getListPhotos(`users/${username}/photos`);

    this.setState({ user, photos });
  }
  render() {
    const {
      photos,
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
    console.log(photos);
    return (
      <ScrollView style={container}>
        <View style={header}>
          {profile_image ? (
            <Image style={imgProfile} source={{ uri: profile_image.large }} />
          ) : null}

          <Text style={name}>
            {first_name} {last_name}
          </Text>
          {location ? <Text style={textInfo}>{location}</Text> : null}

          {portfolio_url ? <Text style={textInfo}>{portfolio_url}</Text> : null}
          {bio ? <Text style={textBio}>{bio}</Text> : null}
          {tags && tags.custom.length > 0 ? (
            <View>
              <Text style={textInfo}>interests</Text>
              <View style={contentRow}>
                {tags.custom.map((t, i) => <Tags key={i} title={t.title} />)}
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
