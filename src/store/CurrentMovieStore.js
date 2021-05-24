import { configure, makeAutoObservable } from "mobx";
import { MovieApi } from "../API/MovieApi";
configure({ enforceActions: 'never' })
class CurrentMovieStore {
  constructor() {
    makeAutoObservable(this)
  }
  stars = [];
  id = null;
  isFetching = false;
  title = null;
  overview = null;
  release_date = null;
  runtime = null;
  genres = null;
  poster_path = null;
  original_title = null;
  user_vote = 0;

  setIsFetching = (value) => {
    this.isFetching = value
  }
  setStars = (star) => {
    this.stars.push(star)
  }
  setSelectedStars = () => {
    this.stars = this.stars.map(star => {
      if (star.id <= this.user_vote) {
        star.isSelected = true
      }
      else {
        star.isSelected = false
      }
      return star
    })
  }
  setHoveredStars = (value) => {
    this.stars = this.stars.map(star => {
      if (star.id <= value) {
        star.onHover = true
      }
      else {
        star.onHover = false
      }
      return star
    })
  }
  clearHoveredStars = (value) => {
    this.stars = this.stars.map(star => {
      if (star.id <= value) {
        star.onHover = false
      }
      return star
    })
  }
  setUserVote = (value) => {
    this.user_vote = value
  }
  setCurrentMovieOptions = (movie) => {
    this.id = movie.id
    this.title = movie.title
    this.overview = movie.overview;
    this.release_date = movie.release_date;
    this.runtime = movie.runtime;
    this.vote = movie.vote;
    this.genres = movie.genres
    this.poster_path = movie.poster_path
    this.original_title = movie.original_title
  }
  setCurrentMovie = (id) => {
    this.setIsFetching(true)
    MovieApi.getCurrentMovie(id).then(data => {
      this.setCurrentMovieOptions(data)
      setTimeout(() => this.setIsFetching(false), 490)
    })
  }
}
export default new CurrentMovieStore()