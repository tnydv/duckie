import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import DuckImage from "../../assets/duck.png";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});

export default ProfileScreen;
