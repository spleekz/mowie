import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { MovieApi } from "../API/MovieApi";

class MovieListStore {
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, { name: 'MovieListStore', properties: ['ratedMovies'], storage: window.localStorage });
  }
  movieList = [];
  popularMovieList = []
  ratedMovies = [];
  inputValue = '';
  searchedInputValue = '';
  isFetching = false
  initialized = false

  setRatedMovies = (ratedMovie) => {
    const similarMovieIndex = this.ratedMovies.findIndex(movie => movie.id === ratedMovie.id)
    if (similarMovieIndex !== -1) {
      if (this.ratedMovies[similarMovieIndex].vote_average === ratedMovie.vote_average) {
        this.ratedMovies = this.ratedMovies.filter(movie => movie.id !== ratedMovie.id)
      }
      else {
        this.ratedMovies = this.ratedMovies.filter(movie => movie.id !== ratedMovie.id)
        this.ratedMovies.push(ratedMovie)
      }
    }
    else {
      this.ratedMovies.push(ratedMovie)
    }
  }
  setIsFetching = (value) => {
    this.isFetching = value
  }
  setInputValue = (value) => {
    this.inputValue = value
  }
  setSearchedInputValue = (value) => {
    this.searchedInputValue = value
  }
  setMovie = (movieList) => {
    this.movieList = movieList
    this.initialized = true
  }
  setPopularMovie = (movieList) => {
    this.popularMovieList = movieList
  }
  setPopularMovieList = () => {
    this.setIsFetching(true)
    MovieApi.getPopularMovieList().then(data => {
      this.setPopularMovie(data.results)
      setTimeout(() => this.setIsFetching(false), 490)
    })
  }
  setMovieList = (name) => {
    this.setIsFetching(true)
    MovieApi.getMovieList(name).then(data => {
      this.setMovie(data.results)
      this.setSearchedInputValue(name)
      setTimeout(() => this.setIsFetching(false), 490)
    })
  }
}
export default new MovieListStore()