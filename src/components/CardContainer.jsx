import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/card.module.css';

const CardContainer = ({ children }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardScroller}>
        {children}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default CardContainer; 