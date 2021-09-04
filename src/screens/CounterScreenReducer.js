import React from "react";
import { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

/* This screen changes color according to amount of red, green, and blue.
What piece of data is changing in our app? : amount of red, green blue

What type of data is it? Number
What is the data's starting (default) value? 0, 0, 0
*/
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      throw new Error("Type should only be increase or decrease");
  }
};

const CounterScreenReducer = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>Counter Screen</Text>
      <Button onPress={() => dispatch({ type: "increase" })} title="Increase" />
      <Button onPress={() => dispatch({ type: "decrease" })} title="Decrease" />
      <Text style={styles.text}>{state.count.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    alignSelf: "center",
  },
});

export default CounterScreenReducer;
