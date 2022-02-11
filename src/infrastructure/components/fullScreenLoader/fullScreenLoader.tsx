import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Loader from '../loader/loader';
import { FullScreenLoaderProps } from './fullScreenLoaderModal';
import './fullScreenLoader.scss';

// eslint-disable-next-line react/function-component-definition
const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({
  invisible,
  transitionDuration,
  color,
}) => {
  return (
    <div>
      <Backdrop
        open={true}
        transitionDuration={transitionDuration}
        invisible={invisible}>
        <Loader color={color} />
      </Backdrop>
    </div >
  );
};

export default FullScreenLoader;
