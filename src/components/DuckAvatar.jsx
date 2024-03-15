import React, { useEffect, useState } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

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
          toValue: 1.5,
          duration: 800,
          useNativeDriver: true,
        })
      ).start();
    } else {
      shakeAnimation.stopAnimation(0);
      shakeAnimation.setValue(0);
    }
  }, [isRecording, shakeAnimation]);

  const animatedStyle = {
    transform: [
      {
        rotate: shakeAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-2deg"],
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
