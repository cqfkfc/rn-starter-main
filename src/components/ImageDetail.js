import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

// https://reactnative.dev/docs/image

const ImageDetail = ({ title, src, score }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={src} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default ImageDetail;
