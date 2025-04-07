import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useFavorites} from '../../context/FavoritesContext';
import MovieList from '../../components/common/MovieList';
import {COLORS, moderateScale} from '../../utils/Theme';
import {SafeAreaView} from 'react-native-safe-area-context';

const FavoritesScreen = () => {
  const {favoriteMovies} = useFavorites();
  return (
    <SafeAreaView
      edges={['top']}
      style={{flex: 1, backgroundColor: COLORS['primary-purple-600']}}>
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
    </SafeAreaView>
  );
};

export default FavoritesScreen;
