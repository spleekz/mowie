import React from 'react'
import MovieList from '../MovieList/MovieList'
import Preloader from '../../../assets/Components/Preloader/Preloader'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../store/RootStore/RootStoreContext'

const PopularMovieList = () => {
  const { MovieListStore } = useStore()
  if (MovieListStore.isFetching) {
    return <Preloader />
  }
  const popularMovieListProps = {
    movieList: MovieListStore.filteredPopularMovieList,
    vote: 'count',
    name: 'popularMovieList',
  }
  return (
    <div>
      <div className='info-message'>Популярные фильмы</div>
      <MovieList {...popularMovieListProps} />
    </div>
  )
}

export default observer(PopularMovieList)
