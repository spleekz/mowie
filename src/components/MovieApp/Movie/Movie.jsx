import React, { useEffect } from 'react'
import DateConverter from '../../../assets/Functions/DateConverter'
import Preloader from '../../../assets/Components/Preloader/Preloader'
import RuntimeConverter from '../../../assets/Functions/RuntimeConverter'
import Stars from './Stars/Stars'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router'
import './Movie.css'
import { useStore } from '../../../store/RootStore/RootStoreContext'

const Movie = () => {
  const { CurrentMovieStore, MovieListStore } = useStore()
  let releaseDate
  const params = useParams()
  const movieId = params.movieId
  const genres = CurrentMovieStore.genres
  const runtimeMinutes = CurrentMovieStore.runtime
  const runtimeHours = RuntimeConverter(runtimeMinutes)

  useEffect(() => {
    CurrentMovieStore.setCurrentMovie(movieId)
    MovieListStore.setInputValue('')
  }, [movieId])

  if (CurrentMovieStore.isFetching) {
    return <Preloader />
  }

  if (CurrentMovieStore.release_date) {
    releaseDate = DateConverter(CurrentMovieStore.release_date.split('-'))
  }

  let posterStyle
  if (CurrentMovieStore.poster_path) {
    posterStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${CurrentMovieStore.poster_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  }

  return (
    <div className='movie'>
      <div className='poster'>
        <div className='movie-poster' style={posterStyle}></div>
        <Stars />
      </div>
      <div className='movie-description'>
        <div className='movie-name'>
          <div className='movie-title'>{CurrentMovieStore.title}</div>
          {CurrentMovieStore.title !== CurrentMovieStore.original_title ? (
            <div className='original-title'>{CurrentMovieStore.original_title}</div>
          ) : null}
        </div>
        <div className='genres'>
          <ul className='genres-list'>
            {genres
              ? genres.map((genre) => {
                  return (
                    <li className='genre' key={genre.name}>
                      {genre.name}
                    </li>
                  )
                })
              : null}
          </ul>
        </div>
        <div className='overview-block'>
          <div className='release-date'>
            <span className='bold'>Дата выхода :</span> {releaseDate}
          </div>
          <div className='overview'>
            <span className='bold'>Сюжет :</span> {CurrentMovieStore.overview}
          </div>
          <div className='runtime'>
            <span className='bold'>Продолжительность :</span> {runtimeMinutes} мин. / {runtimeHours}
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Movie)
