import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Item = ({ iconName, title, description, likes }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handlePlayButton = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity
          style={styles.playButtonContainer}
          onPress={handlePlayButton}>
          <MaterialCommunityIcons
            name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
            size={32}
          />
        </TouchableOpacity>
        <View style={styles.contentSection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity
          style={styles.likeContainer}
          onPress={handleLikePress}>
          <MaterialCommunityIcons
            name={isLiked ? "heart" : "heart-outline"}
            size={24}
          />
          <Text style={styles.likes}>{likes}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//todo:  make heart container fixed.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#ddd",
    borderWidth: 1,
    margin: 5,
    marginBottom: 0,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  playButtonContainer: {
    justifyContent: "center",
    marginRight: 10,
  },
  contentSection: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 5,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likes: {
    marginLeft: 5,
    fontSize: 14,
  },
});

export default Item;
