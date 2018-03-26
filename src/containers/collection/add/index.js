/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { getPhotos, post } from "../../../utils/Unsplash";

import {} from "../../../utils/Unsplash";

import {
  container,
  header,
  title,
  text_create,
  btn_create,
  btn_collection,
  count_photos,
  cover_photo
} from "./style";

export default class Add_to_collection extends Component {
  state = { collection: [], photo_id: null };
  async componentWillMount() {
    const { params } = this.props.navigation.state;
    const { id } = params;
    const collection = await getPhotos("users/anibalajt/collections/");
    this.setState({ collection, photo_id: id });
  }
  componentDidMount() {}
  add_photo_collection = async id => {
    const { photo_id } = this.state;
    const collection = await post(`collections/${id}/add/`, { photo_id });
  };
  render() {
    const { collection } = this.state;
    return (
      <ScrollView style={container}>
        <View style={header}>
          <Text style={title}>Add to collection</Text>
          <View style={{ flex: 1 }} />
          <TouchableWithoutFeedback
            onPress={e => {
              this.props.navigation.goBack();
            }}
          >
            <Icon name="times" size={20} color="grey" />
          </TouchableWithoutFeedback>
        </View>
        <View style={btn_create}>
          <Text style={[text_create, { color: "#999" }]}>
            Create a new collection
          </Text>
        </View>
        {collection.map(c => {

          return (
            <TouchableWithoutFeedback
              key={c.id}
              onPress={e => {
                this.add_photo_collection(c.id);
              }}
            >
              <View style={[btn_create, btn_collection]}>
                {c.cover_photo ? (
                  <Image
                    source={{ uri: c.cover_photo.urls.regular }}
                    style={cover_photo}
                  />
                ) : null}
                <Text style={count_photos}>{c.total_photos} photos</Text>
                <Text style={text_create}>{c.title}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    );
  }
}
