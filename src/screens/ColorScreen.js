import React from "react";
import { useState } from "react";

import { View, Text, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Text>Color Screen</Text>
      <Button
        onPress={() => {
          const colorOne = Math.floor(Math.random() * 255);
          const colorTwo = Math.floor(Math.random() * 255);
          const colorThree = Math.floor(Math.random() * 255);
          const color =
            "rgb(" + colorOne + "," + colorTwo + "," + colorThree + ")";
          setColors(colors.concat([color]));
        }}
        title="Add Color"
      />
      <FlatList
        horizontal={true}
        data={colors}
        keyExtractor={({ item }) => item}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              width: 100,
              margin: 10,
              backgroundColor: item,
            }}
          >
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: "10",
    color: "grey",
    backgroundColor: "white",
    alignSelf: "center",
  },
});

export default ColorScreen;
