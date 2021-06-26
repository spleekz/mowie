import React from 'react'
import deleteCross from '../../../../assets/images/delete-cross.svg'
import { observer } from 'mobx-react-lite'
import './DeleteCross.css'
import { useStore } from '../../../../store/RootStore/RootStoreContext'

const DeleteCross = (props) => {
  const { MovieListStore } = useStore()
  const deleteRatedMovie = (e) => {
    e.stopPropagation()
    MovieListStore.deleteRatedMovie(props.movieId)
  }

  return (
    <div className='delete-cross-block'>
      <img onClick={deleteRatedMovie} className='delete-cross' src={deleteCross} alt='' />
    </div>
  )
}

export default observer(DeleteCross)
