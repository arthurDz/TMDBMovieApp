import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUpcomingMovies} from '../../../api/tmdbApi';
import MovieList from '../../common/MovieList';
import {fetchDataWithPagination} from '../../../utils/AppUtils';

const Upcoming = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paginationLoader, setPaginationLoader] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchUpcomingData = async page => {
    setIsLoading(true);
    try {
      const data = await getUpcomingMovies({page});
      setData(data.results || []);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching trending movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onEndReachedHandler = () => {
    if (hasMoreData) setCurrentPage(currentPage + 1);
    fetchDataWithPagination(
      getUpcomingMovies,
      {page: currentPage + 1},
      setData,
      setPaginationLoader,
      setHasMoreData,
    );
  };

  useEffect(() => {
    fetchUpcomingData(1);
  }, []);

  return (
    <View style={{flex: 1}}>
      <MovieList
        isLoading={isLoading}
        movieData={data}
        onEndReachedHandler={onEndReachedHandler}
        paginationLoader={paginationLoader}
      />
    </View>
  );
};

export default React.memo(Upcoming);
