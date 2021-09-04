import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
const ChangeColorScreen = () => {
  const [red, setRed] = useState(256);
  const [green, setGreen] = useState(256 / 2);
  const [blue, setBlue] = useState(0);
  const rgb = `rgb(${red}, ${green}, ${blue})`;

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

  return (
    <View>
      <Text>Change Color Screen</Text>
      <ColorCounter
        colorText="red"
        colorValue={red}
        onClickIncrease={() => setRed(validateColor(red + COLOR_INCREMENT))}
        onClickDecrease={() => setRed(validateColor(red - COLOR_INCREMENT))}
      />
      <ColorCounter
        colorText="green"
        colorValue={green}
        onClickIncrease={() => setGreen(validateColor(green + COLOR_INCREMENT))}
        onClickDecrease={() => setGreen(validateColor(green - COLOR_INCREMENT))}
      />
      <ColorCounter
        colorText="blue"
        colorValue={blue}
        onClickIncrease={() => setBlue(validateColor(blue + COLOR_INCREMENT))}
        onClickDecrease={() => setBlue(validateColor(blue - COLOR_INCREMENT))}
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

export default ChangeColorScreen;
