const fetchSearch = (searchQuery) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=0c84539b7b6fe9bdba856aa5f27d88e0&language=en-US&query=${searchQuery}&page=1`
  ).then((r) => r.json());
};

const fetchGetTrending = () => {
  return fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=0c84539b7b6fe9bdba856aa5f27d88e0"
  ).then((r) => r.json());
};
const fetchGetMovieDetails = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=0c84539b7b6fe9bdba856aa5f27d88e0&language=en-US`
  ).then((r) => r.json());
};
const fetchGetMovieCredits = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0c84539b7b6fe9bdba856aa5f27d88e0`
  ).then((r) => r.json());
};

const fetchGetMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=0c84539b7b6fe9bdba856aa5f27d88e0`
  ).then((r) => r.json());
};

export default {
  fetchSearch,
  fetchGetTrending,
  fetchGetMovieDetails,
  fetchGetMovieCredits,
  fetchGetMovieReviews,
};
