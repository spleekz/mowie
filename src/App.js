import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import MovieApp from './components/MovieApp/MovieApp';
import MovieListStore from './store/MovieListStore';
import ThemeStore from './store/ThemeStore';

const App = () => {
  const history = useHistory();
  useEffect(() => {
    MovieListStore.setPopularMovieList();
  }, [history]);
  let theme;
  ThemeStore.isDarkTheme ? theme = 'dark' : theme = 'light'
  document.documentElement.setAttribute('data-theme',theme)
  return (
    <div id='app'>
      <Header />
      <MovieApp />
    </div>
  );
}

export default observer(App);