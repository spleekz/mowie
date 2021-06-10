import React from 'react';
import MovieListStore from '../../../store/MovieListStore';
import MovieList from '../MovieList/MovieList';
import Preloader from '../../../assets/Components/Preloader/Preloader';
import { observer } from 'mobx-react-lite';

const PopularMovieList = () => {
  if (MovieListStore.isFetching) {
    return <Preloader />
  }
  const popularMovieListProps = {
    movieList: MovieListStore.filteredPopularMovieList,
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