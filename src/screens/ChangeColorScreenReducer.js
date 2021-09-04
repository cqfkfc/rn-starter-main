import React from "react";
import { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const validateColor = (value) => {
  // color value should be within [0, 256]
  if (value > 256) {
    alert("Value should not be more than 256.");
    return 256;
  }
  if (value < 0) {
    alert("Value should not be less than 0.");
    return 0;
  }

  return value;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        [action.color]: validateColor(state[action.color] + COLOR_INCREMENT),
      };
    case "decrement":
      return {
        ...state,
        [action.color]: validateColor(state[action.color] - COLOR_INCREMENT),
      };
    default:
      throw new Error("Type should be either increment or decrement");
  }
};

const ChangeColorReducerScreen = () => {
  const initialState = { red: 256, green: 256 / 2, blue: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const rgb = `rgb(${state.red}, ${state.green}, ${state.blue})`;

  return (
    <View>
      <Text>Change Color (Reducer Method) Screen</Text>
      <ColorCounter
        colorText="red"
        colorValue={state.red}
        onClickIncrease={() => dispatch({ color: "red", type: "increment" })}
        onClickDecrease={() => dispatch({ color: "red", type: "decrement" })}
      />
      <ColorCounter
        colorText="green"
        colorValue={state.green}
        onClickIncrease={() => dispatch({ color: "green", type: "increment" })}
        onClickDecrease={() => dispatch({ color: "green", type: "decrement" })}
      />
      <ColorCounter
        colorText="blue"
        colorValue={state.blue}
        onClickIncrease={() => dispatch({ color: "blue", type: "increment" })}
        onClickDecrease={() => dispatch({ color: "blue", type: "decrement" })}
      />
      <View style={[styles.box, { backgroundColor: rgb }]}>
        <Text style={styles.text}>{rgb}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 200,
    width: 200,
    alignSelf: "center",
    borderWidth: 10,
    borderColor: "red",
    justifyContent: "center", // justify words vertically
    alignItems: "center", // justify words horizontally
    fontFamily: "Helvetica",
  },
  text: {
    color: "grey",
  },
});

export default ChangeColorReducerScreen;
