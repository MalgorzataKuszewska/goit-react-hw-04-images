import React, { useEffect } from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Modal/Modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  const handleKeyPress = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img className={styles.img} src={imageUrl} alt="Modal" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
