import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {verticalScale} from '../../utils/Theme';
import LinearGradient from 'react-native-linear-gradient';

const Gradient = ({
  bottomGradStyle,
  topGradStyle,
  colors = ['rgba(15,16,17,0)', 'rgba(15,16,20,1)'],
  showTopGradient = false,
}) => {
  return (
    <View style={styles.container}>
      {showTopGradient && (
        <LinearGradient
          colors={['rgba(15,16,20,1)', 'rgba(15,16,20,0)']}
          style={[styles.gradientTop, topGradStyle]}
        />
      )}
      <LinearGradient
        colors={colors}
        style={[styles.gradientBottom, bottomGradStyle]}
      />
    </View>
  );
};

export default Gradient;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: verticalScale(180),
  },
  gradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: verticalScale(200),
    zIndex: 0,
  },
});
