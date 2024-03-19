import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import * as Haptics from "expo-haptics";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Item = ({ iconName, title, description, likes }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleVibrate = async () => {
      try {
        //todo: fix if statement, its backwards. but works correctly
      if (isLiked) {
        await Haptics.selectionAsync();
      } else {
        await Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success
        );
      }
    } catch (error) {
      console.error("Error vibrating device:", error);
    }
  };

  const handlePlayButton = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLikePress = async () => {
    setIsLiked(!isLiked);
    setCurrentLikes((previousState) =>
      isLiked ? previousState - 1 : previousState + 1
    );

    await handleVibrate();
  };

  let iconColor = isLiked ? "#F00" : "#444";

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
          style={[styles.likeContainer, styles.contentAndLikes]}
          onPress={handleLikePress}>
          <MaterialCommunityIcons
            color={iconColor}
            name={isLiked ? "heart" : "heart-outline"}
            size={24}
          />
          <Text style={styles.likes}>{currentLikes}</Text>
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
  contentAndLikes: {
    flexDirection: "column",
    flex: 0.15,
  },
});

export default Item;
