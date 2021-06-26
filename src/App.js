import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import MovieApp from './components/MovieApp/MovieApp'
import { observer } from 'mobx-react-lite'
import { useStore } from './store/RootStore/RootStoreContext'
import './App.css'

const App = () => {
  const { MovieListStore, ThemeStore } = useStore()
  useEffect(() => {
    MovieListStore.setPopularMovieList()
  }, [MovieListStore])
  let theme
  ThemeStore.isDarkTheme ? (theme = 'dark') : (theme = 'light')
  document.documentElement.setAttribute('data-theme', theme)

  return (
    <div id='app'>
      <Header />
      <MovieApp />
    </div>
  )
}

export default observer(App)
