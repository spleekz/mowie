import React, { useEffect } from 'react';
import MovieListStore from '../../../store/MovieListStore';
import MovieList from '../MovieList/MovieList';
import Error from '../../../assets/Components/Error/Error'
import StringFormConverter from '../../../assets/Functions/StringFormConverter';
import Preloader from '../../../assets/Components/Preloader/Preloader';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';

const SearchedMovieList = () => {
  const searchedMovieList = MovieListStore.movieList.filter(movie => {
    return ((movie.overview) && (movie.poster_path) && (movie.vote_average))
  })
  const movieListProps = {
    movieList: searchedMovieList,
    vote: 'count',
    name: 'searchedMovieList'
  }

  const params = useParams()
  const searchedValue = params.searchedValue
  const movieStringForm = StringFormConverter(searchedMovieList.length)

  useEffect(() => {
    MovieListStore.setInputValue(searchedValue)
    MovieListStore.setMovieList(MovieListStore.inputValue)
  }, [searchedValue])

  if (MovieListStore.isFetching) {
    return <Preloader />
  }

  let searchStringForm
  if ((searchedMovieList.length % 10 === 1) && ((searchedMovieList.length < 10) || (searchedMovieList.length > 20))) {
    searchStringForm = 'найден'
  }
  else {
    searchStringForm = 'найдено'
  }

  return (
    <div className="searched-movie-list-main">
      {
        searchedMovieList.length ?
          <div className="searched-movie-list">
            <div className="info-message">
              По запросу <span className='bold'>{MovieListStore.searchedInputValue}</span> {searchStringForm} <span className='bold '>
                {searchedMovieList.length}</span> {movieStringForm}
            </div>
            <MovieList {...movieListProps} />
          </div>
          :
          <Error />
      }
    </div>
  );
}

export default observer(SearchedMovieList);