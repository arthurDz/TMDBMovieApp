import * as tmdbApi from './tmdbApi';
import apiClient from './apiClient';

jest.mock('./apiClient');

describe('TMDB API Calls', () => {
  it('fetches now playing movies', async () => {
    const mockResponse = {results: [{id: 1, title: 'Test Movie'}]};
    apiClient.get.mockResolvedValue(mockResponse);

    const data = await tmdbApi.getNowPlayingMovies({page: 1});

    expect(apiClient.get).toHaveBeenCalledWith('/movie/now_playing', {
      params: {page: 1},
    });
    expect(data).toEqual(mockResponse);
  });

  it('handles API error', async () => {
    apiClient.get.mockRejectedValue(new Error('API failed'));

    await expect(tmdbApi.getPopularMovies()).rejects.toThrow('API failed');
  });
});
