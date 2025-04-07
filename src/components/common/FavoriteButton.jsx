import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useFavorites} from '../../context/FavoritesContext';
import {COLORS, OutlineIcons, SIZES, SolidIcons} from '../../utils/Theme';

const FavoriteButton = ({movie, style}) => {
  const {isFavorite, addFavorite, removeFavorite} = useFavorites();
  const isFav = isFavorite(movie.id);

  const toggleFavorite = () => {
    if (isFav) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <TouchableOpacity onPress={toggleFavorite} style={style}>
      {isFav ? (
        <SolidIcons.HeartIcon
          size={SIZES.large}
          color={COLORS['primary-rose-500']}
        />
      ) : (
        <OutlineIcons.HeartIcon
          size={SIZES.large}
          color={COLORS['primary-rose-500']}
        />
      )}
    </TouchableOpacity>
  );
};

export default FavoriteButton;
