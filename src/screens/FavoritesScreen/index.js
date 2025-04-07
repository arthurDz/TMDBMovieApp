import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useFavorites} from '../../context/FavoritesContext';
import MovieList from '../../components/common/MovieList';
import {moderateScale} from '../../utils/Theme';

const FavoritesScreen = () => {
  const {favoriteMovies} = useFavorites();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Favorites</Text>
      </View>

      {favoriteMovies.length === 0 ? (
        <View style={styles.noFavorite}>
          <Image
            source={require('../../assets/images/no_favorites.png')}
            style={{
              width: moderateScale(200),
              height: moderateScale(200),
            }}
          />
          <Text style={styles.noFavoriteTxt}>No favorites yet.</Text>
        </View>
      ) : (
        <View style={styles.list}>
          <MovieList movieData={favoriteMovies} />
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;
