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
  headerContent: {
    height: verticalScale(300),
  },
  favBtn: {
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(20),
    zIndex: 100,
  },
  bannerImg: {
    width: width,
    height: verticalScale(200),
    zIndex: 0,
    opacity: 0.7,
  },
  bannerImgBottomGradient: {
    height: verticalScale(20),
    zIndex: 1,
  },
  bannerImgTopGradient: {
    height: verticalScale(100),
  },
  mediaHeaderCont: {
    position: 'absolute',
    top: verticalScale(140),
    paddingHorizontal: horizontalScale(10),
    left: 0,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  coverImg: {
    height: verticalScale(190),
    width: horizontalScale(140),
    borderRadius: moderateScale(20),
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
    left: 5,
    bottom: 0,
  },
  movieScoreTxt: {
    fontSize: SIZES.small,
    color: COLORS['Neutrals/neutrals-1'],
    fontWeight: '600',
    fontFamily: FONT.medium,
  },
  mediaName: {
    fontSize: SIZES.large,
    letterSpacing: 0.4,
    fontWeight: '700',
    fontFamily: FONT.bold,
    marginBottom: verticalScale(10),
    textAlign: 'left',
    width: width / 1.7,
    color: COLORS['washed-purple-500'],
  },
  mediaHeaderInfoTxt: {
    fontSize: SIZES.medium,
    color: COLORS['washed-purple-50'],
    letterSpacing: 0.4,
    fontWeight: '600',
    fontFamily: FONT.medium,
    marginLeft: horizontalScale(5),
  },
  mediaInfoCont: {
    width: width,
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(60),
    marginBottom: verticalScale(15),
  },
  tagline: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS['Neutrals/neutrals-1'],
    letterSpacing: 0.4,
    marginVertical: verticalScale(10),
  },
  overview: {
    fontSize: SIZES.small,
    fontFamily: FONT.small,
    color: COLORS['Neutrals/neutrals-1'],
    letterSpacing: 0.4,
    marginVertical: verticalScale(10),
  },
  heading: {
    fontSize: SIZES.large,
    fontWeight: '700',
    fontFamily: FONT.bold,
    letterSpacing: 0.4,
    marginVertical: verticalScale(10),
  },
  character: {
    width: width / 4.2,
    alignItems: 'center',
  },
  characterImg: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(70),
  },
  characterName: {
    fontSize: SIZES.small,
    fontWeight: '600',
    fontFamily: FONT.regular,
    letterSpacing: 0.4,
    color: COLORS['Neutrals/neutrals-1'],
    textAlign: 'center',
    width: width / 5,
  },
  characterRole: {
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
