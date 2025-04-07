import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONT,
  horizontalScale,
  moderateScale,
  SIZES,
  verticalScale,
  width,
} from '../../utils/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS['primary-black'],
  },
  list: {
    padding: moderateScale(12),
  },
  header: {
    height: verticalScale(40),
    backgroundColor: COLORS['primary-purple-600'],
    padding: moderateScale(12),
  },
  headerTitle: {
    fontSize: SIZES.medium,
    color: COLORS['Neutrals/neutrals-1'],
    fontWeight: '600',
    fontFamily: FONT.bold,
  },
  noFavorite: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noFavoriteTxt: {
    fontSize: SIZES.medium,
    color: COLORS['Neutrals/neutrals-1'],
    fontWeight: '600',
    fontFamily: FONT.bold,
  },
});
