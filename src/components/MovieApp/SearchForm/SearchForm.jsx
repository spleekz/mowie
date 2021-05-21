import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import MovieListStore from '../../../store/MovieListStore';
import './SearchForm.css'
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
      width: '310px'
    }
  }
  else {
    inputStyle = {
      width: '175px'
    }
  }

  return (
    <div className="search-form-container">
      <div className="search-form">
        <div className="input-form" style={inputStyle}
          onFocus={() => setIsInputLong(true)}
          onBlur={() => setIsInputLong(false)}>
          <input className='search-form-input'
            onChange={onInputChange}
            onKeyPress={enterHandler}
            value={MovieListStore.inputValue} />
          <Button type="primary" shape="circle" icon={<SearchOutlined />} className='search-form-button' onClick={onInputClick} />
        </div>
      </div>
    </div>
  );
}

export default observer(SearchForm);