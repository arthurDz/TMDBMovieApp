import {StyleSheet} from 'react-native';
import {
  COLORS,
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
    padding: moderateScale(12),
  },
  searchBar: {
    width: '100%',
    borderRadius: moderateScale(12),
    height: verticalScale(40),
    alignSelf: 'center',
    backgroundColor: COLORS['Neutrals/neutrals-10'],
    paddingHorizontal: horizontalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
  },
  serachInput: {
    width: '100%',
    height: '100%',
    fontSize: SIZES.xMedium,
    color: COLORS['Neutrals/neutrals-5'],
  },
});
