// src/navigation/AppNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import {
  COLORS,
  SIZES,
  verticalScale,
  FONT,
  SolidIcons,
  OutlineIcons,
} from '../utils/Theme';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrendingScreen from '../screens/TrendingScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const MyTabBar = React.memo(({state, descriptors, navigation}) => {
    const RenderIcon = ({routeName, isFocused}) => {
      switch (routeName) {
        case 'Home':
          return isFocused ? (
            <SolidIcons.HomeIcon
              size={SIZES.large}
              color={COLORS['primary-purple-600']}
            />
          ) : (
            <OutlineIcons.HomeIcon
              size={SIZES.large}
              color={COLORS['Neutrals/neutrals-1']}
            />
          );

        case 'Trending':
          return isFocused ? (
            <SolidIcons.ArrowTrendingUpIcon
              size={SIZES.large}
              color={COLORS['primary-purple-600']}
            />
          ) : (
            <OutlineIcons.ArrowTrendingUpIcon
              size={SIZES.large}
              color={COLORS['Neutrals/neutrals-1']}
            />
          );

        case 'Search':
          return isFocused ? (
            <SolidIcons.MagnifyingGlassIcon
              size={SIZES.large}
              color={COLORS['primary-purple-600']}
            />
          ) : (
            <OutlineIcons.MagnifyingGlassIcon
              size={SIZES.large}
              color={COLORS['Neutrals/neutrals-1']}
            />
          );

        case 'Favorites':
          return isFocused ? (
            <SolidIcons.HeartIcon
              size={SIZES.large}
              color={COLORS['primary-purple-600']}
            />
          ) : (
            <OutlineIcons.HeartIcon
              size={SIZES.large}
              color={COLORS['Neutrals/neutrals-1']}
            />
          );

        default:
          return isFocused ? (
            <SolidIcons.HomeIcon
              size={SIZES.large}
              color={COLORS['primary-purple-600']}
            />
          ) : (
            <OutlineIcons.HomeIcon
              size={SIZES.large}
              color={COLORS['Neutrals/neutrals-1']}
            />
          );
      }
    };

    return (
      <>
        <View style={styles.tabBar}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            return (
              <TouchableOpacity key={route.key} onPress={onPress}>
                <View style={styles.tab}>
                  <RenderIcon routeName={route.name} isFocused={isFocused} />
                  <Text
                    style={
                      isFocused ? styles.activeTabName : styles.inActiveTabName
                    }>
                    {route.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </>
    );
  });
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Trending"
        component={TrendingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1E1F24',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: verticalScale(55),
  },
  tab: {
    alignItems: 'center',
  },
  activeTabName: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS['primary-purple-600'],
  },
  inActiveTabName: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS['Neutrals/neutrals-1'],
  },
});
