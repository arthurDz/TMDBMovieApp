import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  FONT,
  SIZES,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../../utils/Theme';

const GenreView = ({genres, color}) => {
  const enableScrollHandler = () => {
    const totalGenresWidth = genres?.reduce((acc, genre) => {
      return acc + width / 5;
    }, 0);
    return totalGenresWidth > width;
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={enableScrollHandler()}>
      {genres?.map((genre, index) => (
        <View key={index} style={[styles.genre, {borderColor: color}]}>
          <Text style={[styles.genreTxt, {color: color}]}>{genre?.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default GenreView;

const styles = StyleSheet.create({
  genre: {
    borderWidth: 1,
    borderRadius: moderateScale(7),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(8),
    marginRight: horizontalScale(10),
  },
  genreTxt: {
    fontSize: SIZES.small,
    letterSpacing: 0.2,
    fontWeight: '600',
    fontFamily: FONT.regular,
  },
});
