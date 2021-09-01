import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// from ES6, Array.from is like range()
const data = Array.from({ length: 20 }, (x, i) => ({
  name: "Friend #" + Number(i + 1),
  id: i,
  age: Math.round(Math.random() * 30),
}));

const ListScreen = () => {
  return (
    <View>
      <Text>List</Text>
      <FlatList
        // horizontal
        data={data}
        // the KEY helps react-native delete only that item
        // instead of re-rendering everything
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator
        renderItem={({ item }) => {
          // console.log("item", item);
          // it is confusing as it has a nested "item" key
          // so, use ({item}) instead of (item)
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontFamily: "Roboto",
    padding: 5,
    margin: 10,
  },
});

export default ListScreen;
