import React from 'react';
import { Images } from './imagesModal';

const ImageComponent: React.FC<Images> = ({
  alt,
  className,
  height,
  id,
  onClick,
  src,
  srcSet,
  title,
  width,
}) => {
  return (
    <img
      alt={alt}
      className={className}
      height={height}
      id={id}
      onClick={onClick}
      srcSet={srcSet}
      title={title}
      width={width}
      src={src}
    />
  );
};

export default ImageComponent;
