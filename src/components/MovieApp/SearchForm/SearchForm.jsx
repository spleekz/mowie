import React, { useState } from 'react';
import MovieListStore from '../../../store/MovieListStore';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import './SearchForm.css';

const SearchForm = () => {
  const [isInputLong, setIsInputLong] = useState(false)
  const history = useHistory();
  const onInputClick = () => {
    MovieListStore.setSearchedInputValue(MovieListStore.inputValue)
    if (MovieListStore.searchedInputValue) {
      history.push('/movies/' + MovieListStore.searchedInputValue)
    }
  }
  const onInputChange = (e) => {
    MovieListStore.setInputValue(e.target.value)
  }
  const enterHandler = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      MovieListStore.setSearchedInputValue(MovieListStore.inputValue)
      if (MovieListStore.searchedInputValue) {
        history.push('/movies/' + MovieListStore.searchedInputValue)
      }
    }
  }

  let inputStyle
  if (isInputLong) {
    inputStyle = {
      width: '19.6875rem'
    }
  }
  else {
    inputStyle = {
      width: '15.625rem'
    }
  }

  return (
    <div className="search-form-container">
      <div className="search-form"
        tabIndex='1'
        onFocus={() => setIsInputLong(true)}
        onBlur={() => setIsInputLong(false)}>
        <div className="input-form" style={inputStyle}>
          <input className='search-form-input'
            placeholder='Введите название фильма'
            onChange={onInputChange}
            onKeyPress={enterHandler}
            value={MovieListStore.inputValue} />
          <div className="search-form-button" onClick={onInputClick}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(SearchForm);