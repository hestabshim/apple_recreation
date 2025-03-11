import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/card.module.css";

const GridContainer = ({ children }) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridContainer;
