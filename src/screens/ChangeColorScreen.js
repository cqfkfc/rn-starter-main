import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
const ChangeColorScreen = () => {
  const [red, setRed] = useState(256);
  const [green, setGreen] = useState(256 / 2);
  const [blue, setBlue] = useState(0);
  const rgb = `rgb(${red}, ${green}, ${blue})`;

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
