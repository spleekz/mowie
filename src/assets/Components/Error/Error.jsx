import React from 'react';
import { observer } from 'mobx-react-lite';
import './Error.css'
import MovieListStore from '../../../store/MovieListStore';
const Error = () => {
  return (
    <div className = 'error info-message'>
      По запросу <span className = 'searched-value bold'>{MovieListStore.searchedInputValue}</span> ничего не найдено
    </div>
  );
}

export default observer(Error);
