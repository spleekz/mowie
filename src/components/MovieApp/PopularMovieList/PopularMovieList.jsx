import React from 'react';
import MovieListStore from '../../../store/MovieListStore';
import MovieList from '../MovieList/MovieList';
import Preloader from '../../../assets/Components/Preloader/Preloader';
import { observer } from 'mobx-react-lite';

const PopularMovieList = () => {
  if (MovieListStore.isFetching) {
    return <Preloader />
  }
  const popularMovieList = MovieListStore.popularMovieList.filter(movie => {
    return ((movie.overview) && (movie.poster_path) && (movie.vote_average))
  })
  const popularMovieListProps = {
    movieList: popularMovieList,
    vote: 'count',
    name: 'popularMovieList'
  }
  return (
    <div>
      <div className="info-message">
        Популярные фильмы
          </div>
      <MovieList {...popularMovieListProps} />
    </div>
  );
}

export default observer(PopularMovieList);