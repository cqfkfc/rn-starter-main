import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import ImageDetail from "../components/ImageDetail";

// https://reactnative.dev/docs/image

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageDetail
        title="Forest"
        src={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        src={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="Mountain"
        src={require("../../assets/mountain.jpg")}
        score={8}
      />
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

export default ImageScreen;
