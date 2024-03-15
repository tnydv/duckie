import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import DuckImage from "../../assets/duck.png";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        contentFit="contain"
        style={styles.image}
        source={DuckImage}
        alt="8-bit duck"
      />
      <Text>@tnydv | username</Text>
      <Text>member since</Text>
      <Text>03-09-2024</Text>
      <Text style={styles.logout}>Logout</Text>
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

export default ProfileScreen;
