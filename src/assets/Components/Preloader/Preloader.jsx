import React from 'react';
import preloader from '../../images/preloader.svg'
const Preloader = () => {
  return (
    <div className='preloader-block'>
      <img src={preloader} alt='' className='preloader' />
    </div>
  );
}

export default Preloader;