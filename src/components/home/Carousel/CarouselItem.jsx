import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS, FONT, SIZES, moderateScale, width} from '../../../utils/Theme';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const CarouselItem = ({item, index, x}) => {
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
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.title}>{item?.original_title}</Text>
    </Animated.View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width,
  },
  title: {
    fontSize: SIZES.xxLarge,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    color: COLORS['Neutrals/neutrals-1'],
    fontFamily: FONT.semiBold,
    fontWeight: '700',
    letterSpacing: moderateScale(0.5),
    textAlign: 'center',
  },
});
