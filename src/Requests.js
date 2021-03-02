const API_KEY = "76ec39d7388c638758cb33d665ef6570";

const requests = {
  fetchTrending: `trending/all/day?api_key=${API_KEY}&language=en-IN`,
  fetchAmazonOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=1024`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-IN`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
