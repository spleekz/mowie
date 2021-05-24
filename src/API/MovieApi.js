import axios from "axios"

export const MovieApi = {
  getPopularMovieList: () => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3556ce51d8ebbbd9f64a2b04a067e408&language=ru`)
      .then(response => {
        return response.data
      })
  },
  getMovieList: (name) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3556ce51d8ebbbd9f64a2b04a067e408&language=ru&query=${name}`)
      .then(response => {
        return response.data
      })
  },
  getCurrentMovie: (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3556ce51d8ebbbd9f64a2b04a067e408&language=ru`)
      .then(response => {
        return response.data
      })
  }
}