import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Button/Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
