import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // Button vs. Touchable Opacity
  console.log("navigation", navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("ComponentOne")}
        title="ComponentOne"
      />
      <TouchableOpacity onPress={() => navigation.navigate("ListComponent")}>
        <Text>ListComponent</Text>
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
