import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import NowPlaying from './Sections/NowPlaying';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Popular from './Sections/Popular';
import TopRated from './Sections/TopRated';
import Upcoming from './Sections/Upcoming';
import {COLORS} from '../../utils/Theme';

const renderScene = SceneMap({
  first: NowPlaying,
  second: Popular,
  third: TopRated,
  fourth: Upcoming,
});

const routes = [
  {key: 'first', title: 'Now Playing'},
  {key: 'second', title: 'Popular'},
  {key: 'third', title: 'Top Rated'},
  {key: 'fourth', title: 'Upcoming'},
];

const Tabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.tabView}
      indicatorStyle={{backgroundColor: COLORS['Neutrals/neutrals-1']}}
    />
  );
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      swipeEnabled={false}
      renderTabBar={renderTabBar}
    />
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: COLORS['primary-purple-600'],
  },
});
