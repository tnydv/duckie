import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DuckAvatar from "../components/DuckAvatar";

import DuckImage from "../../assets/duck.png";

const HomeScreen = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleImagePress = () => {
    setIsRecording(!isRecording);
  };

  return (
    <View style={styles.container}>
      <DuckAvatar
        source={DuckImage}
        isRecording={isRecording}
        onPress={handleImagePress}
        style={styles.image}
        alt="8-bit duck"
      />
      <Text style={styles.info}>
        Tap to {isRecording ? "stop" : "start"} recording
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: "90%",
  },
  info: {
    opacity: 0.4,
    color: "red",
    fontSize: 16,
  },
});

export default HomeScreen;
