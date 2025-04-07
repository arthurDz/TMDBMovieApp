import React from 'react';
import styles from './styles';
import Tabs from '../../components/home/Tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {COLORS} from '../../utils/Theme';

const HomeScreen = () => {
  return (
    <SafeAreaView
      edges={['top']}
      style={{flex: 1, backgroundColor: COLORS['primary-purple-600']}}>
      <View style={styles.container}>
        <Tabs />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
