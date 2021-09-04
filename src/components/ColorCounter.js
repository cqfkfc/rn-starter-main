import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

const ColorCounter = ({
  colorText,
  colorValue,
  onClickIncrease,
  onClickDecrease,
}) => {
  return (
    <View style={styles.container}>
      <Text>Value: {colorValue}</Text>
      <Button
        onPress={() => onClickIncrease()}
        title={`Increase ${colorText}`}
      />
      <Button
        onPress={() => onClickDecrease()}
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
