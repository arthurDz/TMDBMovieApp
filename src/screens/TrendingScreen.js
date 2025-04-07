import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getTrendingMovies} from '../api/tmdbApi';
import TrendingMovie from '../components/common/TrendingMovie';
import {width} from '../utils/Theme';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import BackdropImage from '../components/common/BackdropImage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const _spacing = 12;
const _imageWidth = width * 0.7;
const _imageHeight = _imageWidth * 1.76;

const TrendingScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const scrollX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler(e => {
    scrollX.value = e.contentOffset.x / (_imageWidth + _spacing);
  });

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    setIsLoading(true);
    try {
      const data = await getTrendingMovies('day', {page: 1});
      setData(data.results || []);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>;
  }
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: -insets.top}]}>
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((movie, index) => {
          return (
            <BackdropImage movie={movie} index={index} scrollX={scrollX} />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => {
          return (
            <TrendingMovie
              item={item}
              index={index}
              scrollX={scrollX}
              key={String(item.id)}
            />
          );
        }}
        horizontal
        contentContainerStyle={{
          gap: _spacing,
          paddingHorizontal: (width - _imageWidth) / 2,
        }}
        snapToInterval={_imageWidth + _spacing}
        decelerationRate={'fast'}
        style={{flexGrow: 0}}
        onScroll={onScroll}
        scrollEventThrottle={1000 / 60} // 16.6ms
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
