import { configure, makeAutoObservable, runInAction } from 'mobx'
import { MovieApi } from '../API/MovieApi'
configure({ enforceActions: 'never' })
export class CurrentMovieStore {
  constructor() {
    makeAutoObservable(this)
  }
  stars = []
  id = null
  isFetching = false
  title = null
  overview = null
  release_date = null
  runtime = null
  genres = null
  poster_path = null
  original_title = null
  user_vote = 0

  setIsFetching = (value) => {
    this.isFetching = value
  }
  setStars = (star) => {
    this.stars.push(star)
  }
  setSelectedStars = () => {
    this.stars = this.stars.map((star) => {
      if (star.id <= this.user_vote) {
        star.isSelected = true
      } else {
        star.isSelected = false
      }
      return star
    })
  }
  setHoveredStars = (value) => {
    this.stars = this.stars.map((star) => {
      if (star.id <= value) {
        star.onHover = true
      } else {
        star.onHover = false
      }
      return star
    })
  }
  clearHoveredStars = (value) => {
    this.stars = this.stars.map((star) => {
      if (star.id <= value) {
        star.onHover = false
      }
      return star
    })
  }
  setUserVote = (value) => {
    this.user_vote = value
  }
  setCurrentMovie = (id) => {
    this.setIsFetching(true)
    MovieApi.getCurrentMovie(id).then((data) => {
      runInAction(() => {
        this.id = data.id
        this.title = data.title
        this.overview = data.overview
        this.release_date = data.release_date
        this.runtime = data.runtime
        this.vote = data.vote
        this.genres = data.genres
        this.poster_path = data.poster_path
        this.original_title = data.original_title
      })
      setTimeout(() => this.setIsFetching(false), 490)
    })
  }
}
