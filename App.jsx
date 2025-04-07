import {StyleSheet} from 'react-native';
import React from 'react';
import AppRoutes from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from './src/utils/Theme';
import {FavoritesProvider} from './src/context/FavoritesContext';

const App = () => {
  if (__DEV__) {
    require('./ReactotronConfig');
  }
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <GestureHandlerRootView>
        <FavoritesProvider>
          <AppRoutes />
        </FavoritesProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS['primary-purple-600'],
  },
});

export default App;
