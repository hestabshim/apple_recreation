import styles from "../styles/home.module.css";
import PropTypes from "prop-types";
const GridItem = ({image, title, subtitle, link, link2}) => {
   return (
   <div className={styles.grid}>
    <div className={`${styles.gridItem}`}>
    <img src={image} alt={title} className={styles.imageGrid} />
      <h4 className={styles.gridTitle}>{title}</h4>
      <p className={styles.gridSubtitle}>{subtitle}</p>
      <div className={styles.cta}>
        <a href="#" className={styles.link}>
          {link} &gt;
        </a>    
        <a href="#" className={styles.link}>
          {link2} &gt;
        </a>
      </div>
    </div>
    </div>
    )
}

GridItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    link2: PropTypes.string
}

export default GridItem;