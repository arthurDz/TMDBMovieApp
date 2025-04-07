import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();
const FAVORITES_KEY = 'favorite_movies';

const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // For Efficient ID lookup
  const favoriteIdsSet = useMemo(
    () => new Set(favoriteMovies.map(movie => movie.id)),
    [favoriteMovies],
  );

  useEffect(() => {
    const stored = storage.getString(FAVORITES_KEY);
    if (stored) {
      setFavoriteMovies(JSON.parse(stored));
    }
  }, []);

  const saveToStorage = favorites => {
    setFavoriteMovies(favorites);
    storage.set(FAVORITES_KEY, JSON.stringify(favorites));
  };

  const addFavorite = movie => {
    if (!favoriteIdsSet.has(movie.id)) {
      const updated = [...favoriteMovies, movie];
      saveToStorage(updated);
    }
  };

  const removeFavorite = movieId => {
    const updated = favoriteMovies.filter(movie => movie.id !== movieId);
    saveToStorage(updated);
  };

  const isFavorite = movieId => favoriteIdsSet.has(movieId);

  return (
    <FavoritesContext.Provider
      value={{favoriteMovies, addFavorite, removeFavorite, isFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
