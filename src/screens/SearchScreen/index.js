import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles';
import {
  COLORS,
  OutlineIcons,
  SIZES,
  verticalScale,
  width,
} from '../../utils/Theme';
import {debounce} from '../../utils/AppUtils';
import {searchMovies} from '../../api/tmdbApi';
import MovieList from '../../components/common/MovieList';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [paginationLoader, setPaginationLoader] = useState(false);

  const fetchSearchResults = async query => {
    try {
      setIsLoading(true);
      setError('');
      const data = await searchMovies(query);
      setSearchResults(data.results || []);
    } catch (err) {
      setError(err.message || 'Something went wrong');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedSearch = useRef(debounce(fetchSearchResults, 300)).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearch = useCallback(
    val => {
      setSearchQuery(val);

      if (val.length === 0) {
        setSearchResults([]);
        setError('');
        setIsLoading(false);
        return;
      }

      if (val.length >= 2) {
        debouncedSearch(val);
      }
    },
    [debouncedSearch],
  );

  const emptyComponent = () => {
    return (
      <View
        style={[
          styles.container,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Image
          source={require('../../assets/images/search_empty_img.png')}
          style={{
            width: width / 1.5,
            height: verticalScale(200),
          }}
          resizeMode="contain"
        />
      </View>
    );
  };

  const onEndReachedHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <OutlineIcons.MagnifyingGlassIcon
          size={SIZES.large}
          color={COLORS['Neutrals/neutrals-5']}
        />
        <TextInput
          value={searchQuery}
          onChangeText={txt => handleSearch(txt)}
          style={styles.serachInput}
          cursorColor={COLORS['Neutrals/neutrals-5']}
          placeholder="Search for a movie, tv show, person...."
          placeholderTextColor={COLORS['Neutrals/neutrals-5']}
        />
      </View>

      <MovieList
        isLoading={isLoading}
        movieData={searchResults}
        onEndReachedHandler={onEndReachedHandler}
        paginationLoader={paginationLoader}
        emptyComponent={emptyComponent}
      />
    </View>
  );
};

export default SearchScreen;
