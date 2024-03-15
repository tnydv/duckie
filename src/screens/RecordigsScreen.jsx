import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RecordingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RecordingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    width: 90,
    maxHeight: 90,
    borderRadius: 100,
    backgroundColor: "blue",
  },
  logout: {
    color: "red",
  },
});

export default RecordingsScreen;
