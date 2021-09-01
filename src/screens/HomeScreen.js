import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // Button vs. Touchable Opacity
  console.log("navigation", navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("FirstScreen")}
        title="Go to the first screen"
      />
      <Button
        onPress={() => navigation.navigate("ListScreen")}
        title="Go to the list screen"
      />
      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="Go to the image screen"
      />
      <TouchableOpacity onPress={() => navigation.navigate("FirstScreen")}>
        <Text>TouchableOpacity First Screen Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
