import React from 'react';
import ThemeStore from '../../../store/ThemeStore';
import blackPreloader from '../../images/black-preloader.svg'
import whitePreloader from '../../images/white-preloader.svg'
import { observer } from 'mobx-react-lite';
import './Preloader.css'

const Preloader = () => {
  let preloader;
  if (ThemeStore.isDarkTheme) {
    preloader = whitePreloader
  }
  else {
    preloader = blackPreloader
  }

  return (
    <div className='preloader-block'>
      <img src={preloader} alt='' className='preloader' />
    </div>
  );
}

export default observer(Preloader);