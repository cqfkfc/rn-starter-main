import React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";

// https://reactnative.dev/docs/textinput

const EnterNameScreen = () => {
  const [name, setName] = useState("Michael");
  return (
    <SafeAreaView>
      <Text>Enter Name:</Text>
      <TextInput
        autoCapitalize={false}
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text>My Name is {name}.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    maxWidth: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default EnterNameScreen;
