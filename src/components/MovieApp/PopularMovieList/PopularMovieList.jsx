import { observer } from 'mobx-react-lite';
import React from 'react';
import Preloader from '../../../assets/Components/Preloader/Preloader';
import MovieListStore from '../../../store/MovieListStore';
import MovieList from '../MovieList/MovieList';

const PopularMovieList = () => {
  if(MovieListStore.isFetching){
    return <Preloader />
  }
  const popularMovieList = MovieListStore.popularMovieList.filter(movie => {
    return ((movie.overview) && (movie.poster_path) && (movie.vote_average))
  })
  const count = 'count';
  const popularMovieListProps = {
    movieList: popularMovieList,
    vote: count
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
