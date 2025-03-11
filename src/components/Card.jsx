import React, { useState } from 'react';
import styles from '../styles/card.module.css';
import PropTypes from 'prop-types';

const Card = ({ image, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.card} onClick={handleCardClick}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <div className={styles.modalContent}>
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Card; 