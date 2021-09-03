import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
const ChangeColorScreen = () => {
  const [red, setRed] = useState(256);
  const [green, setGreen] = useState(256);
  const [blue, setBlue] = useState(256);
  const rgb = `rgb(${red}, ${green}, ${blue})`;

  return (
    <View>
      <Text>Change Color Screen</Text>
      <ColorCounter colorText="red" colorValue={red} setColorValue={setRed} />
      <ColorCounter
        colorText="green"
        colorValue={green}
        setColorValue={setGreen}
      />
      <ColorCounter
        colorText="blue"
        colorValue={blue}
        setColorValue={setBlue}
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
