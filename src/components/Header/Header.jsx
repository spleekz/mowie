import React from 'react'
import { useHistory } from 'react-router'
import './Header.css'
import { useStore } from '../../store/RootStore/RootStoreContext'

const Header = () => {
  const { ThemeStore } = useStore()
  let themeIcon
  if (ThemeStore.isDarkTheme) {
    themeIcon = '🌞'
  } else {
    themeIcon = '🌜'
  }
  const history = useHistory()
  return (
    <div className='header'>
      <div className='header-title'>mowie</div>
      <div className='header-navbar'>
        <div className='all-movies-link link header-navbar-item' onClick={() => history.push('/')}>
          Все фильмы
        </div>
        <div
          className='rated-movies-link link header-navbar-item'
          onClick={() => history.push('/rated')}
        >
          Мои оценки
        </div>
        <div className='theme-changer'>
          <div className='theme-icon' onClick={ThemeStore.setTheme}>
            {themeIcon}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
