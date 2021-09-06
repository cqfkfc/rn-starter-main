import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { useState } from "react";
const EnterPasswordScreen = () => {
  const [password, setPassword] = useState("pw");
  const MIN_PASSWORD_LENGTH = 5;
  return (
    <SafeAreaView>
      <Text style={styles.text}>!Enter Password:</Text>
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
      />
      {password.length < MIN_PASSWORD_LENGTH && (
        <Text style={styles.errorText}>
          Password must be longer than {MIN_PASSWORD_LENGTH} characters.
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = {
  text: {
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    borderWidth: 1,
    height: 30,
    maxWidth: 300,
  },
  errorText: {
    color: "red",
  },
};

export default EnterPasswordScreen;
