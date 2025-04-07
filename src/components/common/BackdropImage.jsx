import {StyleSheet} from 'react-native';
import React from 'react';
import {buildImageUrl} from '../../utils/imagePathBuilder';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const BackdropImage = ({movie, index, scrollX}) => {
  const styles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [0, 1, 0],
      ),
    };
  });

  return (
    <Animated.Image
      source={{uri: buildImageUrl(movie?.poster_path)}}
      key={movie.id}
      style={[StyleSheet.absoluteFillObject, styles]}
      blurRadius={50}
    />
  );
};

export default BackdropImage;
