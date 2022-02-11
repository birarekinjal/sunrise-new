import React from 'react';
import { IconProps } from './iconsModal';

const CustomeIcons: React.FC<IconProps> = ({
  width,
  height,
  srcSet,
  alt,
  src,
  withText,
  text,
}) => {
  return (
    <>
      {withText ? (
        <>
          <img
            width={width}
            height={height}
            srcSet={srcSet}
            alt={alt}
            src={src}
          />
          <p>{text}</p>
        </>
      ) : (
        <img
          width={width}
          height={height}
          srcSet={srcSet}
          alt={alt}
          src={src}
        />
      )}
    </>
  );
};

export default CustomeIcons;
