import React from 'react';
import MovieListStore from '../../../../store/MovieListStore';
import deleteCross from '../../../../assets/images/delete-cross.svg'
import { observer } from 'mobx-react-lite';
import './DeleteCross.css'

const DeleteCross = (props) => {
  const deleteRatedMovie = (e) => {
    e.stopPropagation();
    MovieListStore.deleteRatedMovie(props.movieId)
  }

  return (
    <div className='delete-cross-block'>
      <img
        onClick={deleteRatedMovie}
        className='delete-cross'
        src={deleteCross}
        alt='' />
    </div>
  );
}

export default observer(DeleteCross);