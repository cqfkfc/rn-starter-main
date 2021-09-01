import React from "react";
import { StyleSheet, Text, View } from "react-native";

// https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706402#questions

const FirstScreen = () => {
  const userName = "Alice";
  return (
    <View>
      <Text style={styles.textStyleBig}>
        Getting started with React Native!
      </Text>
      <Text style={styles.textStyleSmall}>My name is {userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleBig: {
    fontSize: 45,
  },
  textStyleSmall: {
    fontSize: 20,
  },
});

export default FirstScreen;
