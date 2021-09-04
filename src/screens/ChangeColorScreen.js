import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
const ChangeColorScreen = () => {
  const [red, setRed] = useState(256);
  const [green, setGreen] = useState(256);
  const [blue, setBlue] = useState(256);
  const rgb = `rgb(${red}, ${green}, ${blue})`;

  const validateColor = (value) => {
    // color value should be within [0, 256]
    return Math.min(Math.max(value, 0), 256);
  };

  return (
    <View>
      <Text>Change Color Screen</Text>
      <ColorCounter
        colorText="red"
        colorValue={red}
        onClickIncrease={() => setRed(validateColor(red + 1))}
        onClickDecrease={() => setRed(validateColor(red - 1))}
      />
      <ColorCounter
        colorText="green"
        colorValue={green}
        onClickIncrease={() => setGreen(validateColor(green + 1))}
        onClickDecrease={() => setGreen(validateColor(green - 1))}
        setColorValue={setGreen}
      />
      <ColorCounter
        colorText="blue"
        colorValue={blue}
        onClickIncrease={() => setBlue(validateColor(blue + 1))}
        onClickDecrease={() => setBlue(validateColor(blue - 1))}
      />
      <Text>{rgb}</Text>
      <View style={[styles.box, { backgroundColor: rgb }]} />
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
  },
});

export default ChangeColorScreen;
