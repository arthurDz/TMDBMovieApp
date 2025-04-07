import {StyleSheet} from 'react-native';
import React from 'react';
import {verticalScale, width} from '../../../utils/Theme';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {buildImageUrl} from '../../../utils/imagePathBuilder';

const BackImage = ({item, index, x}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacityAnim = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-0.6, 1, -0.6],
      Extrapolation.CLAMP,
    );
    return {opacity: opacityAnim};
  });

  return (
    <Animated.Image
      style={[StyleSheet.absoluteFillObject, styles.img, animatedStyle]}
      source={{uri: buildImageUrl(item?.poster_path)}}
    />
  );
};

export default BackImage;

const styles = StyleSheet.create({
  img: {
    width: width,
    height: verticalScale(300),
  },
});
