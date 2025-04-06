import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {getTrendingMovies} from '../../api/tmdbApi';

const HomeScreen = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [loadingCarousel, setLoadingCarousel] = useState(false);
  const [carouselError, setCarouselError] = useState(null);

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
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
