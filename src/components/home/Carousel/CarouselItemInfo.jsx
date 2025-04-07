import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONT, SIZES, width} from '../../../utils/Theme';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const CarouselItemInfo = ({item, index, x}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacityAnim = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-2, 1, -2],
      Extrapolation.CLAMP,
    );
    return {opacity: opacityAnim};
  });

  return (
    <Animated.Text style={[styles.textInfo, animatedStyle]}>
      {item?.release_date}
    </Animated.Text>
  );
};

export default CarouselItemInfo;

const styles = StyleSheet.create({
  textInfo: {
    color: COLORS['Neutrals/neutrals-1'],
    fontSize: SIZES.medium,
    fontWeight: '700',
    fontFamily: FONT.bold,
    textAlign: 'center',
  },
});
