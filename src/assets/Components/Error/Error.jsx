import React from 'react'
import { observer } from 'mobx-react-lite'
import './Error.css'
import { useStore } from '../../../store/RootStore/RootStoreContext'

const Error = () => {
  const { MovieListStore } = useStore()
  return (
    <div className='error info-message'>
      По запросу <span className='searched-value bold'>{MovieListStore.searchedInputValue}</span>{' '}
      ничего не найдено
    </div>
  )
}

export default observer(Error)
