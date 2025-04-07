import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Theme';

const Pagination = ({data, paginationIndex}) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        return (
          <View
            style={paginationIndex === index ? styles.dot : styles.inactiveDot}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: COLORS['Neutrals/neutrals-1'],
    height: moderateScale(8),
    width: moderateScale(8),
    marginHorizontal: horizontalScale(2),
    borderRadius: moderateScale(8),
  },
  inactiveDot: {
    backgroundColor: COLORS['Neutrals/neutrals-1'],
    height: moderateScale(7),
    width: moderateScale(7),
    marginHorizontal: horizontalScale(2),
    borderRadius: moderateScale(7),
    opacity: 0.5,
  },
});
