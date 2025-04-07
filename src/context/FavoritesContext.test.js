import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {FavoritesProvider, useFavorites} from './FavoritesContext';
import {Text, Button} from 'react-native';
import {MMKV} from 'react-native-mmkv';

// Mock MMKV
jest.mock('react-native-mmkv', () => {
  return {
    MMKV: jest.fn().mockImplementation(() => ({
      getString: jest.fn(),
      set: jest.fn(),
    })),
  };
});

// Dummy test component that uses the context
const TestComponent = () => {
  const {addFavorite, removeFavorite, isFavorite} = useFavorites();
  const movie = {id: 1, title: 'Test Movie'};
  const fav = isFavorite(movie.id);

  return (
    <>
      <Text testID="status">{fav ? 'Favorite' : 'Not Favorite'}</Text>
      <Button title="Add" onPress={() => addFavorite(movie)} />
      <Button title="Remove" onPress={() => removeFavorite(movie.id)} />
    </>
  );
};

describe('FavoritesContext', () => {
  it('adds and removes a favorite', async () => {
    const {getByText, getByTestId} = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>,
    );

    expect(getByTestId('status').props.children).toBe('Not Favorite');

    fireEvent.press(getByText('Add'));

    await waitFor(() => {
      expect(getByTestId('status').props.children).toBe('Favorite');
    });

    fireEvent.press(getByText('Remove'));

    await waitFor(() => {
      expect(getByTestId('status').props.children).toBe('Not Favorite');
    });
  });
});
