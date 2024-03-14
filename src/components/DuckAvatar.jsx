import { Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import DuckImage from "../../assets/duck.png";

const DEFAULT_IMAGE = DuckImage;

const DuckAvatar = ({
  source = DEFAULT_IMAGE,
  isRecording,
  onPress,
  style,
  alt,
}) => {
  const [shakeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isRecording) {
      Animated.loop(
        Animated.timing(shakeAnimation, {
          toValue: -2,
          duration: 850,
          useNativeDriver: true,
        })
      ).start();
    } else {
      shakeAnimation.stopAnimation();
      shakeAnimation.setValue(0);
    }
  }, [isRecording]);

  const animatedStyle = {
    transform: [
      {
        rotate: shakeAnimation.interpolate({
          inputRange: [-2, 0, 2],
          outputRange: ["-2deg", "0deg", "2deg"],
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress?.(); 
      }}>
      <Animated.Image
        source={source}
        style={[style, animatedStyle]}
        resizeMode="contain"
        alt={alt}
      />
    </TouchableWithoutFeedback>
  );
};

export default DuckAvatar;
