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
  header: {
    height: verticalScale(40),
    backgroundColor: COLORS['primary-purple-600'],
    padding: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  headerTitle: {
    fontSize: SIZES.medium,
    color: COLORS['Neutrals/neutrals-1'],
    fontWeight: '600',
    fontFamily: FONT.bold,
  },
});
