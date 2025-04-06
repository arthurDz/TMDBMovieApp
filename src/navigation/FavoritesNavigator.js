import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();

const FavoritesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
  </Stack.Navigator>
);

export default FavoritesNavigator;
