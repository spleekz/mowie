import React from 'react'
import RatingStyleCreator from '../../../assets/Functions/RatingStyleCreator'
import DeleteCross from '../RatedMovies/DeleteCross/DeleteCross'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import yellowStar from '../../../assets/images/yellow-star-no-border.svg'
import './MovieList.css'

const MovieList = (props) => {
  const movieList = props.movieList.slice().sort((a, b) => b.vote_average - a.vote_average)
  const history = useHistory()

  return (
    <div className='movie-list'>
      {movieList.map((movie) => {
        const onPreviewClick = () => {
          history.push('/movie/' + movie.id)
        }
        let posterStyle
        if (movie.poster_path) {
          posterStyle = {
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        }
        const ratingStyle = RatingStyleCreator(movie.vote_average)
        let starIconSrc
        if (props.vote === 'stars') {
          starIconSrc = yellowStar
        }
        return (
          <div className='movie-preview' key={movie.id}>
            <div className='preview-image' style={posterStyle} onClick={onPreviewClick}>
              {props.name === 'ratedMovieList' ? <DeleteCross movieId={movie.id} /> : null}
              <div className='rating' style={ratingStyle}>
                <div className='rating-count'>
                  {movie.vote_average}
                  {props.vote === 'stars' ? <img className='star-icon' src={starIconSrc} alt=''></img> : null}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default observer(MovieList)
