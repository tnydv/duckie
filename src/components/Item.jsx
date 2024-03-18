import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Item = ({ iconName, title, description, likes }) => {
  const [isLiked, setIsLiked] = useState(false); // Track like state

  const handleLikePress = () => {
    setIsLiked(!isLiked); // Toggle like state on press

  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.playButtonContainer}>
          <MaterialCommunityIcons name="play-circle-outline" size={32} />
        </View>
        <View style={styles.contentSection}>
          <Text style={styles.title}>{title}</Text>
          <Text>{description}</Text>
        </View>
        <TouchableOpacity style={styles.likeContainer} onPress={handleLikePress}>
          <MaterialCommunityIcons name={isLiked ? "heart" : "heart-outline"} size={24} />
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
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 5,
    marginBottom: 0,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  playButtonContainer: {
    justifyContent: "center", // Center play button vertically
    marginRight: 10, // Add margin for spacing after button
    // Consider using a fixed width (e.g., width: 50)
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
    justifyContent: "flex-end", // Center likes section horizontally to the right
  },
  likes: {
    marginLeft: 5, // Add margin for spacing after heart icon
    fontSize: 14, // Make likes text smaller
  },
});

export default Item;
