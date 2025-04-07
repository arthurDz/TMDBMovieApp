/**
 * Centralized API client configuration using axios
 */
import axios from 'axios';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add API key to every request
apiClient.interceptors.request.use(
  config => {
    config.params = {
      ...config.params,
      api_key: 'afb05f1dde55d5d6f2d0708bd1bc6251',
    };
    console.log('Making request to:', Config.TMDB_BASE_URL + config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => {
    // Any status code within the range of 2xx will be handled here
    return response.data;
  },
  error => {
    // Formatting captured errors
    let errorMessage = 'Something went wrong. Please try again later.';

    if (error.response) {
      // Any status code outside of 2xx range
      console.error('API Error Response:', error.response.data);

      if (error.response.data && error.response.data.status_message) {
        errorMessage = error.response.data.status_message;
      } else {
        switch (error.response.status) {
          case 401:
            errorMessage = 'Unauthorized. Please check your API key.';
            break;
          case 404:
            errorMessage = 'The requested resource was not found.';
            break;
          case 429:
            errorMessage = 'Too many requests. Please try again later.';
            break;
          case 500:
          case 502:
          case 503:
          case 504:
            errorMessage = 'Server error. Please try again later.';
            break;
        }
      }
    } else if (error.request) {
      console.error('API No Response:', error.request);
      errorMessage =
        'No response from server. Please check your internet connection.';
    } else {
      console.error('API Request Error:', error.message);
    }

    return Promise.reject({
      message: errorMessage,
      originalError: error,
      isNetworkError: !error.response && error.request,
    });
  },
);

export default apiClient;
