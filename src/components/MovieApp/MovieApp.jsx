import React from 'react'
import RatedMovies from './RatedMovies/RatedMovies'
import PopularMovieList from './PopularMovieList/PopularMovieList'
import SearchedMovieList from './SearchedMovieList/SearchedMovieList'
import SearchForm from './SearchForm/SearchForm'
import Movie from './Movie/Movie'
import { observer } from 'mobx-react-lite'
import { Redirect, Route, Switch } from 'react-router'
import './MovieApp.css'

const MovieApp = () => {
  return (
    <div className='movie-app'>
      <SearchForm />
      <Switch>
        <Route exact path='/' render={() => <PopularMovieList />} />
        <Route exact path='/movies/:searchedValue' component={() => <SearchedMovieList />} />
        <Route path='/movie/:movieId' component={() => <Movie />} />
        <Route path='/rated' component={() => <RatedMovies />} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  )
}

export default observer(MovieApp)
