import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  COLORS,
  FONT,
  SIZES,
  moderateScale,
  verticalScale,
  width,
} from '../../../utils/Theme';
import {buildImageUrl} from '../../../utils/imagePathBuilder';
import FastImage from '@d11/react-native-fast-image';

const CharactersList = ({data}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data?.map((character, index) => (
        <View key={index} style={styles.character}>
          <FastImage
            source={{
              uri:
                buildImageUrl(character?.profile_path) ||
                'https://fakeimg.pl/70x70?text=No+Image',
              priority: FastImage.priority.normal,
            }}
            style={styles.characterImg}
          />
          <Text style={styles.characterName}>{character?.character}</Text>
          <Text style={styles.name}>{character?.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CharactersList;

const styles = StyleSheet.create({
  character: {
    width: width / 4.2,
    alignItems: 'center',
  },
  characterImg: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(70),
  },
  name: {
    fontSize: SIZES.small,
    fontWeight: '600',
    fontFamily: FONT.regular,
    letterSpacing: 0.4,
    color: COLORS['Neutrals/neutrals-1'],
    textAlign: 'center',
    width: width / 5,
  },
  characterName: {
    fontSize: SIZES.xSmall,
    fontWeight: '600',
    fontFamily: FONT.regular,
    marginVertical: verticalScale(6),
    textTransform: 'capitalize',
    color: COLORS['primary-purple-50'],
    textAlign: 'center',
    width: width / 6,
  },
});
