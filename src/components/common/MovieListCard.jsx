import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  COLORS,
  FONT,
  horizontalScale,
  moderateScale,
  OutlineIcons,
  SIZES,
  verticalScale,
  width,
} from '../../utils/Theme';
import FastImage from '@d11/react-native-fast-image';
import {buildImageUrl} from '../../utils/imagePathBuilder';
import Gradient from '../home/Gradient';
import {getDate} from '../../utils/AppUtils';
import FavoriteButton from './FavoriteButton';
import {useNavigation} from '@react-navigation/native';

const MovieListCard = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('MovieDetails', {movie: item})}>
      <FastImage
        source={{
          uri:
            buildImageUrl(item?.poster_path) ||
            'https://fakeimg.pl/400x400?text=No+Image',
          priority: 'high',
        }}
        style={[styles.img]}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={styles.cardDetails}>
        <Text style={styles.movieTitle}>{item?.original_title}</Text>
        <Text style={styles.movieRD}>{getDate(item?.release_date)}</Text>
      </View>

      <View style={styles.movieScore}>
        <OutlineIcons.FaceSmileIcon
          color={COLORS['primary-green-400']}
          size={SIZES.xMedium}
        />
        <Text style={styles.movieScoreTxt}>
          {Math.floor(item?.vote_average * 10)}%
        </Text>
      </View>

      <FavoriteButton movie={item} style={styles.favBtn} />
      <Gradient bottomGradStyle={styles.bottomGradStyle} />
    </TouchableOpacity>
  );
};

export default MovieListCard;

const styles = StyleSheet.create({
  card: {
    width: width / 2.2,
    height: verticalScale(250),
    borderRadius: moderateScale(8),
    marginHorizontal: horizontalScale(5),
  },
  img: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: moderateScale(8),
  },
  bottomGradStyle: {
    height: verticalScale(130),
  },
  cardDetails: {
    position: 'absolute',
    bottom: verticalScale(10),
    left: horizontalScale(10),
    zIndex: 1,
    width: horizontalScale(130),
  },
  movieTitle: {
    fontSize: SIZES.medium,
    color: COLORS['Neutrals/neutrals-1'],
    fontWeight: '600',
    fontFamily: FONT.bold,
  },
  movieRD: {
    color: COLORS['primary-gray'],
    fontSize: SIZES.xMedium,
    fontWeight: '600',
    fontFamily: FONT.medium,
  },
  movieScore: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS['primary-dark-blue'],
    opacity: 0.9,
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(2),
    paddingHorizontal: verticalScale(4),
    width: horizontalScale(45),
    justifyContent: 'space-between',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  movieScoreTxt: {
    fontSize: SIZES.small,
    color: COLORS['Neutrals/neutrals-1'],
    fontWeight: '600',
    fontFamily: FONT.medium,
  },
  favBtn: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
