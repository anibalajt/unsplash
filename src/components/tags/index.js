import React from "react";
import { View, Text } from "react-native";
import { container } from "./style";
export default ({ title }) => {
  return (
    <View style={container}>
      <Text>{title}</Text>
    </View>
  );
};
