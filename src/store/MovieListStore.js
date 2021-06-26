import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { MovieApi } from '../API/MovieApi'

export class MovieListStore {
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'MovieListStore',
      properties: ['ratedMovies'],
      storage: window.localStorage,
    })
  }
  movieList = []
  popularMovieList = []
  ratedMovies = []
  inputValue = ''
  searchedInputValue = ''
  isFetching = false

  setRatedMovies = (ratedMovie) => {
    const similarMovieIndex = this.ratedMovies.findIndex((movie) => movie.id === ratedMovie.id)
    if (similarMovieIndex !== -1) {
      if (this.ratedMovies[similarMovieIndex].vote_average === ratedMovie.vote_average) {
        this.ratedMovies = this.ratedMovies.filter((movie) => movie.id !== ratedMovie.id)
      } else {
        this.ratedMovies = this.ratedMovies.filter((movie) => movie.id !== ratedMovie.id)
        this.ratedMovies.push(ratedMovie)
      }
    } else {
      this.ratedMovies.push(ratedMovie)
    }
  }
  deleteRatedMovie = (movieId) => {
    this.ratedMovies = this.ratedMovies.filter((movie) => movie.id !== movieId)
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
  }
  setPopularMovie = (movieList) => {
    this.popularMovieList = movieList
  }
  setPopularMovieList = () => {
    this.setIsFetching(true)
    MovieApi.getPopularMovieList().then((data) => {
      this.setPopularMovie(data.results)
      setTimeout(() => this.setIsFetching(false), 490)
    })
  }
  setMovieList = (name) => {
    this.setIsFetching(true)
    MovieApi.getMovieList(name).then((data) => {
      this.setMovie(data.results)
      this.setSearchedInputValue(name)
      setTimeout(() => this.setIsFetching(false), 490)
    })
  }

  get filteredMovieList() {
    return this.movieList.filter((movie) => {
      return movie.overview && movie.poster_path && movie.vote_average
    })
  }
  get filteredPopularMovieList() {
    return this.popularMovieList.filter((movie) => {
      return movie.overview && movie.poster_path && movie.vote_average
    })
  }
}
