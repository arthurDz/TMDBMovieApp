import {ActivityIndicator, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {TabBar, TabView} from 'react-native-tab-view';
import NowPlaying from './Sections/NowPlaying';
import Popular from './Sections/Popular';
import TopRated from './Sections/TopRated';
import Upcoming from './Sections/Upcoming';
import {COLORS} from '../../utils/Theme';

const routes = [
  {key: 'first', title: 'Now Playing'},
  {key: 'second', title: 'Popular'},
  {key: 'third', title: 'Top Rated'},
  {key: 'fourth', title: 'Upcoming'},
];

const renderScene = ({route}) => {
  switch (route.key) {
    case 'first':
      return <NowPlaying />;
    case 'second':
      return <Popular />;
    case 'third':
      return <TopRated />;
    case 'fourth':
      return <Upcoming />;
    default:
      return null;
  }
};

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
      renderTabBar={renderTabBar}
      lazy
      renderLazyPlaceholder={() => <ActivityIndicator size="large" />}
    />
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: COLORS['primary-purple-600'],
  },
});
