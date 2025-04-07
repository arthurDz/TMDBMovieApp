import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {width} from '../../utils/Theme';
import {buildImageUrl} from '../../utils/imagePathBuilder';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const _imageWidth = width * 0.7;
const _imageHeight = _imageWidth * 1.76;

const TrendingMovie = ({item, index, scrollX}) => {
  const navigation = useNavigation();
  const styles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [1.6, 1, 1.6],
          ),
        },
        {
          rotate: `${interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [10, 1, -10],
          )}deg`,
        },
      ],
    };
  });
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: _imageWidth,
        height: _imageHeight,
        overflow: 'hidden',
        borderRadius: 16,
      }}
      onPress={() => navigation.navigate('MovieDetails', {movie: item})}>
      <Animated.Image
        source={{uri: buildImageUrl(item?.poster_path)}}
        style={[{flex: 1}, styles]}
      />
    </TouchableOpacity>
  );
};

export default TrendingMovie;
