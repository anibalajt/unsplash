import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
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
  photo_like
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
  item: { user, likes, created_at, urls: { small } }
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
        <Text style={photo_like}>{likes}</Text>
      </View>
    </View>
  );
};
