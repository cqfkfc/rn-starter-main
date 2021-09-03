import React from "react";
import { useState } from "react";
import { View, Text, useS, Button, StyleSheet } from "react-native";

/* This screen changes color according to amount of red, green, and blue.
What piece of data is changing in our app? : amount of red, green blue

What type of data is it? Number
What is the data's starting (default) value? 0, 0, 0
*/

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Counter Screen</Text>
      <Button onPress={() => setCount(count + 1)} title="Increase" />
      <Button onPress={() => setCount(count - 1)} title="Decrease" />
      <Text style={styles.text}>{count.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    alignSelf: "center",
  },
});

export default CounterScreen;
