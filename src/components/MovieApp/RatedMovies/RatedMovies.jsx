import React from 'react';
import { observer } from 'mobx-react-lite';
import MovieListStore from '../../../store/MovieListStore';
import MovieList from '../MovieList/MovieList';
import StringFormConverter from '../../../assets/Functions/StringFormConverter';

const RatedMovies = () => {
  const stars = 'stars'
  const ratedMovieList = MovieListStore.ratedMovies
  const ratedMovieListProps = {
    movieList: ratedMovieList,
    vote: stars
  }
  const RatedMovieListLength = MovieListStore.ratedMovies.length
  const movieStringForm = StringFormConverter(RatedMovieListLength)
  return (
    <div className="rated-movies">
      {
        RatedMovieListLength ?
          <div className="info-message">
            Вы оценили <span className = 'bold'>{RatedMovieListLength} {movieStringForm}</span>
          </div> :
          <div className="info-message">У Вас пока нет оценок</div>
      }
      {
        RatedMovieListLength ? <MovieList {...ratedMovieListProps} /> : null
      }
    </div>
  );
}

export default observer(RatedMovies);
