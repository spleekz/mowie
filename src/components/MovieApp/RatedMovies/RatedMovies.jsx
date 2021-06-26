import React from 'react'
import MovieList from '../MovieList/MovieList'
import StringFormConverter from '../../../assets/Functions/StringFormConverter'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../store/RootStore/RootStoreContext'

const RatedMovies = () => {
  const { MovieListStore } = useStore()
  const ratedMovieList = MovieListStore.ratedMovies
  const ratedMovieListProps = {
    movieList: ratedMovieList,
    vote: 'stars',
    name: 'ratedMovieList',
  }
  const RatedMovieListLength = MovieListStore.ratedMovies.length
  const movieStringForm = StringFormConverter(RatedMovieListLength)

  return (
    <div className='rated-movies'>
      {RatedMovieListLength ? (
        <div className='info-message'>
          Вы оценили{' '}
          <span className='bold'>
            {RatedMovieListLength} {movieStringForm}
          </span>
        </div>
      ) : (
        <div className='info-message'>У Вас пока нет оценок</div>
      )}
      {RatedMovieListLength ? <MovieList {...ratedMovieListProps} /> : null}
    </div>
  )
}

export default observer(RatedMovies)
