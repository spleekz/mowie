import React, { useEffect } from 'react'
import StarSrcCreator from '../../../../assets/Functions/StarSrcCreator'
import { observer } from 'mobx-react-lite'
import './Stars.css'
import { useStore } from '../../../../store/RootStore/RootStoreContext'

const Stars = () => {
  const { CurrentMovieStore, MovieListStore } = useStore()
  useEffect(() => {
    const movieIndex = MovieListStore.ratedMovies.findIndex(
      (movie) => movie.id === CurrentMovieStore.id
    )
    if (!CurrentMovieStore.stars.length) {
      for (let i = 1; i <= 10; i++) {
        let starName
        if (i === 1) {
          starName = 'звезда'
        } else if (i >= 2 && i <= 4) {
          starName = 'звезды'
        } else {
          starName = 'звёзд'
        }
        CurrentMovieStore.setStars({
          id: i,
          name: `${i} ${starName}`,
          isSelected: false,
          onHover: false,
        })
      }
    }
    if (movieIndex !== -1) {
      CurrentMovieStore.setUserVote(MovieListStore.ratedMovies[movieIndex].vote_average)
    } else {
      CurrentMovieStore.setUserVote(0)
    }
    CurrentMovieStore.setSelectedStars(CurrentMovieStore.user_vote)
  }, [])

  const setRatedMovies = (star) => {
    if (CurrentMovieStore.user_vote === star) {
      CurrentMovieStore.setUserVote(0)
    } else {
      CurrentMovieStore.setUserVote(star)
    }
    CurrentMovieStore.setSelectedStars(CurrentMovieStore.user_vote)
    MovieListStore.setRatedMovies({
      id: CurrentMovieStore.id,
      poster_path: CurrentMovieStore.poster_path,
      vote_average: star,
    })
  }

  return (
    <div className='stars-container'>
      <ul className='stars'>
        {CurrentMovieStore.stars.map((star) => {
          const starSrc = StarSrcCreator(star)
          return (
            <img
              onClick={() => setRatedMovies(star.id)}
              onMouseOver={() => CurrentMovieStore.setHoveredStars(star.id)}
              onMouseLeave={() =>
                CurrentMovieStore.clearHoveredStars(CurrentMovieStore.stars.length)
              }
              key={star.id}
              className='star'
              src={starSrc}
              title={star.name}
              alt=''
            />
          )
        })}
      </ul>
    </div>
  )
}

export default observer(Stars)
