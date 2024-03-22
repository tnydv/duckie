import React, { useEffect, useState } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

import DuckImage from "../../assets/duck.png";

const DuckAvatar = ({
  source = DuckImage,
  isRecording,
  onPress,
  style,
  alt,
}) => {
  const imageSource = source ?? DuckImage;

  const [recordingShake] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    if (isRecording) {
      Animated.loop(
        Animated.timing(recordingShake, {
          toValue: 1.5,
          duration: 800,
          useNativeDriver: true,
        })
      ).start();
    } else {
      recordingShake.stopAnimation(0);
      recordingShake.setValue(0);
    }
  };

  useEffect(() => {
    handleAnimation();

    return () => recordingShake.stopAnimation();
  }, [isRecording, recordingShake]);

  const animatedStyle = {
    transform: [
      {
        rotate: recordingShake.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-2deg"],
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.Image
        source={imageSource}
        style={[style, animatedStyle]}
        resizeMode="contain"
        alt={alt}
      />
    </TouchableWithoutFeedback>
  );
};

export default DuckAvatar;
