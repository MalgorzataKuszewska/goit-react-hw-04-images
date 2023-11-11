import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li onClick={onClick}>
      <img
        className={styles.image}
        src={image.webformatURL}
        alt={`${image.id}`}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
