/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationActions } from "react-navigation";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import { getPhotos } from "../../utils/Unsplash";

import { container, header, conten_input, input, cancel } from "./style";

export default class SearchAux extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    title: "search",
    tabBarIcon: (e, b) => {
      return <Icon name="search" size={25} color="#999" />;
    }
  });
  state = { query: "" };

  render() {
    const { query } = this.state;
    return (
      <ScrollView style={container}>
        <View
          style={[
            header,
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItem: "center"
            }
          ]}
        >
          <View style={conten_input}>
            <Icon name="search" size={25} color="#999" />
            <TextInput
              onSubmitEditing={() =>
                this.props.navigation.navigate("search", { query })
              }
              style={input}
              underlineColorAndroid="transparent"
              value={query}
              onChangeText={query => this.setState({ query })}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={e => {
              this.props.navigation.navigate("search", { query });
            }}
          >
            <View>
              <Text style={cancel}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    );
  }
}
