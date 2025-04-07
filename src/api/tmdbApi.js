import apiClient from './apiClient';

// API endpoint paths
const endpoints = {
  nowPlaying: '/movie/now_playing',
  popular: '/movie/popular',
  topRated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
  // For movie details, we append {movie_id} at runtime.
  movieDetails: '/movie/',
  // For searching movies
  search: '/search/movie',
  // For trending movies (optional)
  trending: '/trending/movie',
};

/**
 * Get "Now Playing" movies
 * @param {Object} params - Query params (e.g., { page: 1, language: 'en-US' })
 */
export const getNowPlayingMovies = async (params = {}) => {
  try {
    return await apiClient.get(endpoints.nowPlaying, {params: params});
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw error;
  }
};

/**
 * Get "Popular" movies
 * @param {Object} params - Query params (e.g., { page: 1, language: 'en-US' })
 */
export const getPopularMovies = async (params = {}) => {
  try {
    const requestParams = {page: 1, ...params};
    return await apiClient.get(endpoints.popular, {params: requestParams});
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

/**
 * Get "Top Rated" movies
 * @param {Object} params - Query params
 */
export const getTopRatedMovies = async (params = {}) => {
  try {
    const requestParams = {page: 1, ...params};
    return await apiClient.get(endpoints.topRated, {params: requestParams});
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    throw error;
  }
};

/**
 * Get "Upcoming" movies
 * @param {Object} params - Query params
 */
export const getUpcomingMovies = async (params = {}) => {
  try {
    const requestParams = {page: 1, ...params};
    return await apiClient.get(endpoints.upcoming, {params: requestParams});
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};

/**
 * Get movie details by ID
 * @param {number|string} movieId - The TMDB movie ID
 * @param {Object} params - Additional query params (e.g., { language: 'en-US' })
 */
export const getMovieDetails = async (movieId, params = {}) => {
  try {
    const requestParams = {...params, append_to_response: 'credits'};
    return await apiClient.get(`${endpoints.movieDetails}${movieId}`, {
      params: requestParams,
    });
  } catch (error) {
    console.error(`Error fetching details for movie ID: ${movieId}`, error);
    throw error;
  }
};

/**
 * Search for movies by query
 * @param {string} query - The search query (movie title)
 * @param {Object} params - Additional query params (e.g., { page: 1, language: 'en-US' })
 */
export const searchMovies = async (query, params = {}) => {
  try {
    // Ensure we have a 'query' param; default page=1 if not provided
    const requestParams = {
      page: 1,
      ...params,
      query,
    };
    return await apiClient.get(endpoints.search, {params: requestParams});
  } catch (error) {
    console.error(`Error searching movies for query: ${query}`, error);
    throw error;
  }
};

/**
 * (Optional) Get trending movies (day/week)
 * timeWindow can be 'day' or 'week'
 * @param {string} timeWindow - 'day' or 'week'
 * @param {Object} params - Additional query params (e.g., { page: 1, language: 'en-US' })
 */
export const getTrendingMovies = async (timeWindow = 'day', params = {}) => {
  try {
    const requestParams = {page: 1, ...params};
    return await apiClient.get(`${endpoints.trending}/${timeWindow}`, {
      params: requestParams,
    });
  } catch (error) {
    console.error(`Error fetching trending movies for ${timeWindow}`, error);
    throw error;
  }
};
