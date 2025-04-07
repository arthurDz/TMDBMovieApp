import moment from 'moment';

export const getDate = date => {
  return moment(date).format('MMM DD, YYYY');
};

export const debounce = (func, wait) => {
  let timeout;

  const debounced = (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };

  debounced.cancel = () => {
    if (timeout) clearTimeout(timeout);
  };

  return debounced;
};

export const fetchDataWithPagination = async (
  fetchDataFunction,
  params,
  setFunction,
  setLoadingState,
  setHasMoreData,
) => {
  setLoadingState(true);
  try {
    const data = await fetchDataFunction(params);
    const currentPage = data?.page;
    const totalPages = data?.total_pages;

    setFunction(prevData => [...prevData, ...data.results]);
    if (currentPage === totalPages) setHasMoreData(false);
  } catch (error) {
    setError(error.message);
    console.error('Error fetching now playing movies:', error);
  } finally {
    setLoadingState(false);
  }
};
