import styles from "../styles/home.module.css";
const BigCard = () => {
    return (
        <section className={`${styles.section} ${styles.dark}`}>
          <div className={`${styles.hero} ${styles.iphone15pro}`}>
            <h2 className={styles.title}>iPhone 15 Pro</h2>
            <h3 className={styles.subtitle}>Titanium. So strong. So light. So Pro.</h3>
            <div className={styles.cta}>
              <a href="#" className={styles.link}>Learn more &gt;</a>
              <a href="#" className={styles.link}>Buy &gt;</a>
            </div>
          </div>
        </section>
    )
}

export default BigCard;
