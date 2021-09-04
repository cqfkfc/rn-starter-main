import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // Button vs. Touchable Opacity
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("FirstScreen")}
        title="Go to the first screen"
      />
      <Button
        onPress={() => navigation.navigate("ListScreen")}
        title="Go to the list screen"
      />
      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="Go to the image screen"
      />
      <Button
        onPress={() => navigation.navigate("CounterScreen")}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => navigation.navigate("CounterScreenReducer")}
        title="Go to Counter (Reducer Method) Screen"
      />
      <Button
        onPress={() => navigation.navigate("ColorScreen")}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => navigation.navigate("ChangeColorScreen")}
        title="Go to Change Color Screen"
      />
      <Button
        onPress={() => navigation.navigate("ChangeColorReducerScreen")}
        title="Go to Change Color (Reducer Method) Screen"
      />
      <TouchableOpacity onPress={() => navigation.navigate("FirstScreen")}>
        <Text>TouchableOpacity First Screen Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
