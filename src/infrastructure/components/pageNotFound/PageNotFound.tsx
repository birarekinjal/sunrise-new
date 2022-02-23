import React from 'react';
import { Button } from '../../../infrastructure/components';
import imgNotFound from '../../images/404-page-not-found-min.png';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <div className='inner'>
        <h1>Oopps!</h1>
        <h2>404 - Page not found</h2>
        <Button
          label="Back to home"
          color="secondary"          
          className={'customFilledBtn'}
          onClick={() => ''}
        />
        <img src={imgNotFound} alt="404 Page not found" />
      </div>
    </div>
  );
};

export default PageNotFound;