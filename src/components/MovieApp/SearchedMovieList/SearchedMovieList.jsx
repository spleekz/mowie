import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import MovieListStore from '../../../store/MovieListStore';
import MovieList from '../MovieList/MovieList';
import Error from '../../../assets/Components/Error/Error'
import StringFormConverter from '../../../assets/Functions/StringFormConverter';
import Preloader from '../../../assets/Components/Preloader/Preloader';


const SearchedMovieList = () => {
  const params = useParams()
  const searchedValue = params.searchedValue
  const movieList = MovieListStore.movieList.filter(movie => {
    return ((movie.overview) && (movie.poster_path) && (movie.vote_average))
  })
  const movieStringForm = StringFormConverter(movieList.length)
  const count = 'count';
  const movieListProps = {
    movieList: movieList,
    vote: count
  }

  useEffect(() => {
      MovieListStore.setInputValue(searchedValue)
      MovieListStore.setMovieList(MovieListStore.inputValue)
  }, [searchedValue])

  if(MovieListStore.isFetching){
    return <Preloader />
  }

  let searchStringForm
  if((movieList.length % 10 === 1)&&((movieList.length <10)||(movieList.length>20))){
    searchStringForm = 'найден'
  }
  else {
    searchStringForm = 'найдено'
  }

  return (
    <div className="searched-movie-list-main">
      {
        movieList.length ?
          <div className="searched-movie-list">
            <div className="info-message">
              По запросу <span className='bold'>{MovieListStore.searchedInputValue}</span> {searchStringForm} <span className='bold '>
                {movieList.length}</span> {movieStringForm}
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
