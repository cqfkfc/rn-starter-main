import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

const ColorCounter = ({ colorText, colorValue, setColorValue }) => {
  const validateColor = (value) => {
    // color value should be within [0, 256]
    return Math.min(Math.max(value, 0), 256);
  };

  return (
    <View style={styles.container}>
      <Text>Value: {colorValue}</Text>
      <Button
        onPress={() => {
          setColorValue(validateColor(colorValue + 1));
        }}
        title={`Increase ${colorText}`}
      />
      <Button
        onPress={() => {
          setColorValue(validateColor(colorValue - 1));
        }}
        title={`Decrease ${colorText}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default ColorCounter;
