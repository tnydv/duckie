import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Item = ({ iconName, title, description, likes }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false); // Track like state

  const handlePlayButton = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLikePress = () => {
    setIsLiked(!isLiked); // Toggle like state on press
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
          <Text>{description}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#ddd", // Light gray border (optional)
    borderWidth: 1, // Border width (optional)
    margin: 5,
    marginBottom: 0,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center", // Align content vertically
  },
  playButtonContainer: {
    justifyContent: "center", // Center play button vertically
    marginRight: 10, // Add margin for spacing after button
  },
  contentSection: {
    flex: 1, // Allow title and description to expand and fill available space
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 5, // Add margin for spacing after title
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center", // Align heart and likes text vertically
  },
  likes: {
    marginLeft: 5, // Add margin for spacing after heart icon
    fontSize: 14, // Make likes text smaller
  },
  // New style for invisible border
  contentAndLikes: {
    flexDirection: "row", // Arrange content and likes section side-by-side
    flex: 1, // Make this section flexible to fill remaining space
    borderBottomWidth: 1, // Add invisible border to the bottom
    borderBottomColor: "transparent", // Make the border invisible
  },
});

export default Item;
