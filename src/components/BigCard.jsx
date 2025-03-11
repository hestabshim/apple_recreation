import styles from "../styles/home.module.css";
import PropTypes from "prop-types";

const BigCard = ({ title, subtitle, cta }) => {
    return (
        <section className={`${styles.section} ${styles.dark}`}>
          <div className={`${styles.hero} ${styles.iphone15pro}`}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <div className={styles.cta}>
              <a href="#" className={styles.link}>{cta.link1}</a>
              <a href="#" className={styles.link}>{cta.link2}</a>
            </div>
          </div>
        </section>
    )
}

BigCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    cta: PropTypes.object.isRequired
}

export default BigCard;
