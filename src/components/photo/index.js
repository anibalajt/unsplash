import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import {
  container,
  content_autor,
  c_name_autor,
  c_img_autor,
  name,
  content_photo,
  photo,
  hours_style,
  photo_activity,
  photo_like,
  content_photo_like
} from "./style";
const color = [
  "rgb(239, 77, 0)",
  "rgb(233, 225, 224)",
  "rgb(234, 141, 101)",
  "rgb(2, 46, 62)",
  "rgb(255, 206, 115)"
];
export default ({
  handleViewProfile,
  handleDownload,
  handleAddCollection,
  item: { id, user, likes, created_at, urls: { small } }
}) => {
  const { first_name, last_name, profile_image, username } = user;
  //
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  const a = moment([year, month + 1, day]);
  //
  d = new Date(created_at);
  day = d.getDate();
  month = d.getMonth();
  year = d.getFullYear();
  const b = moment([year, month + 1, day]);
  const hours = a.diff(b, "hours");

  return (
    <View style={container}>
      <TouchableWithoutFeedback
        onPress={e => {
          handleViewProfile(username);
        }}
      >
        <View style={content_autor}>
          <Image style={c_img_autor} source={{ uri: profile_image.large }} />
          <View style={c_name_autor}>
            <Text style={name}>
              {first_name} {last_name}
            </Text>
            <Text style={hours_style}>hace {hours} horas</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={[content_photo]}>
        <Image style={photo} source={{ uri: small }} />
      </View>
      <View style={photo_activity}>
        <View style={content_photo_like}>
          <Icon name="heart" size={15} color="#f15151" />
          <Text style={photo_like}>{likes}</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={e => {
            handleAddCollection(id);
          }}
        >
          <View style={[content_photo_like, { marginLeft: 10 }]}>
            <Icon name="plus" size={15} color="grey" />
          </View>
        </TouchableWithoutFeedback>

        <View style={{ flex: 1 }} />
        <TouchableWithoutFeedback
          onPress={e => {
            handleDownload(id);
          }}
        >
          <View style={content_photo_like}>
            <Icon name="download" size={15} color="grey" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
