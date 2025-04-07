import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {getTrendingMovies} from '../../api/tmdbApi';
import Carousel from '../../components/home/Carousel';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Tabs from '../../components/home/Tabs';

const HomeScreen = () => {
  const translateY = useSharedValue(0);
  const scrollAnimatedRef = useAnimatedRef();

  const [carouselData, setCarouselData] = useState([]);
  const [loadingCarousel, setLoadingCarousel] = useState(false);
  const [carouselError, setCarouselError] = useState(null);

  const scrollviewScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateY.value = event.contentOffset.y;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    const translateYAnim = interpolate(
      translateY.value,
      [350, 450],
      [0, -450],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{translateY: translateYAnim}],
    };
  });

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    setLoadingCarousel(true);
    setCarouselError(null);
    try {
      // e.g. day => 'day', or 'week'
      const data = await getTrendingMovies('day', {page: 1});
      setCarouselData(data.results || []);
    } catch (error) {
      setCarouselError(error.message);
      console.error('Error fetching trending movies:', error);
    } finally {
      setLoadingCarousel(false);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollAnimatedRef}
        scrollEventThrottle={16}
        onScroll={scrollviewScrollHandler}
        contentContainerStyle={{flexGrow: 1}}>
        {/* <Animated.View style={animatedStyle}>
          {loadingCarousel ? (
            <Text>Loading</Text>
          ) : (
            <Carousel data={carouselData} />
          )}
        </Animated.View> */}

        <Tabs />
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;
