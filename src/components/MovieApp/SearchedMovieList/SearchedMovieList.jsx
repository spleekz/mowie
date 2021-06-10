import React, { useEffect } from 'react';
import MovieListStore from '../../../store/MovieListStore';
import MovieList from '../MovieList/MovieList';
import Error from '../../../assets/Components/Error/Error'
import StringFormConverter from '../../../assets/Functions/StringFormConverter';
import Preloader from '../../../assets/Components/Preloader/Preloader';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';

const SearchedMovieList = () => {
  const movieListProps = {
    movieList: MovieListStore.filteredMovieList,
    vote: 'count',
    name: 'searchedMovieList'
  }

  const params = useParams()
  const searchedValue = params.searchedValue
  const movieStringForm = StringFormConverter(MovieListStore.filteredMovieList.length)

  useEffect(() => {
    MovieListStore.setInputValue(searchedValue)
    MovieListStore.setMovieList(MovieListStore.inputValue)
  }, [searchedValue])

  if (MovieListStore.isFetching) {
    return <Preloader />
  }

  let searchStringForm
  if ((MovieListStore.filteredMovieList.length % 10 === 1) && ((MovieListStore.filteredMovieList.length < 10) || (MovieListStore.filteredMovieList.length > 20))) {
    searchStringForm = 'найден'
  }
  else {
    searchStringForm = 'найдено'
  }

  return (
    <div className="searched-movie-list-main">
      {
        MovieListStore.filteredMovieList.length ?
          <div className="searched-movie-list">
            <div className="info-message">
              По запросу <span className='bold'>{MovieListStore.searchedInputValue}</span> {searchStringForm} <span className='bold '>
                {MovieListStore.filteredMovieList.length}</span> {movieStringForm}
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