import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getTopRatedMovies} from '../../../api/tmdbApi';
import MovieList from '../../common/MovieList';
import {fetchDataWithPagination} from '../../../utils/AppUtils';

const TopRated = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paginationLoader, setPaginationLoader] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchTopratedData = async page => {
    setIsLoading(true);
    try {
      const data = await getTopRatedMovies({page});
      const currentPage = data?.page;
      const totalPages = data?.total_pages;

      setData(data.results || []);
      if (currentPage === totalPages) setHasMoreData(false);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching trending movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreData = async page => {
    setPaginationLoader(true);
    try {
      const data = await getTopRatedMovies({page});
      const currentPage = data?.page;
      const totalPages = data?.total_pages;

      setData(prevData => [...prevData, ...data.results]);
      if (currentPage === totalPages) setHasMoreData(false);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching now playing movies:', error);
    } finally {
      setPaginationLoader(false);
    }
  };

  const onEndReachedHandler = () => {
    if (hasMoreData) setCurrentPage(currentPage + 1);
    fetchDataWithPagination(
      getTopRatedMovies,
      {page: currentPage + 1},
      setData,
      setPaginationLoader,
      setHasMoreData,
    );
  };

  useEffect(() => {
    fetchTopratedData(1);
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

export default React.memo(TopRated);
