import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getNowPlayingMovies} from '../../../api/tmdbApi';
import MovieList from '../../common/MovieList';
import {fetchDataWithPagination} from '../../../utils/AppUtils';

const NowPlaying = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paginationLoader, setPaginationLoader] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchNowPlayingData = async page => {
    setIsLoading(true);
    try {
      const data = await getNowPlayingMovies({page});
      const currentPage = data?.page;
      const totalPages = data?.total_pages;

      setData(data.results || []);
      if (currentPage === totalPages) setHasMoreData(false);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching now playing movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onEndReachedHandler = () => {
    if (hasMoreData) setCurrentPage(currentPage + 1);
    fetchDataWithPagination(
      getNowPlayingMovies,
      {page: currentPage + 1},
      setData,
      setPaginationLoader,
      setHasMoreData,
    );
  };

  useEffect(() => {
    fetchNowPlayingData(1);
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

export default React.memo(NowPlaying);
