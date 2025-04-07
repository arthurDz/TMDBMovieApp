import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Tabs from '../../components/home/Tabs';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
};

export default HomeScreen;
