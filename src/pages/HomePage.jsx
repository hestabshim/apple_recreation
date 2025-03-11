import React from "react";
import styles from "../styles/home.module.css";
import BigCard from "../components/bigcard";
const HomePage = () => {
  return (
    <>
      <BigCard />
      <BigCard />

        
        <div className={styles.grid}>
          
          <div className={`${styles.gridItem} ${styles.macbookPro}`}>
            <h4 className={styles.gridTitle}>MacBook Pro</h4>
            <p className={styles.gridSubtitle}>Mind-blowing. Head-turning.</p>
            <div className={styles.cta}>
              <a href="#" className={styles.link}>Learn more &gt;</a>
              <a href="#" className={styles.link}>Buy &gt;</a>
            </div>
          </div>

         
          <div className={`${styles.gridItem} ${styles.watch}`}>
            <h4 className={styles.gridTitle}>WATCH</h4>
            <p className={styles.gridSubtitle}>SERIES 9</p>
            <p className={styles.gridSubtitle}>Smarter. Brighter. Mightier.</p>
            <div className={styles.cta}>
              <a href="#" className={styles.link}>Learn more &gt;</a>
              <a href="#" className={styles.link}>Buy &gt;</a>
            </div>
          </div>

      
          <div className={`${styles.gridItem} ${styles.ipad}`}>
            <h4 className={styles.gridTitle}>iPad</h4>
            <p className={styles.gridSubtitle}>Lovable. Drawable. Magical.</p>
            <div className={styles.cta}>
              <a href="#" className={styles.link}>Learn more &gt;</a>
              <a href="#" className={styles.link}>Buy &gt;</a>
            </div>
          </div>

        
          <div className={`${styles.gridItem} ${styles.airpodsPro}`}>
            <h4 className={styles.gridTitle}>AirPods Pro</h4>
            <p className={styles.gridSubtitle}>Adaptive Audio. Now playing.</p>
            <div className={styles.cta}>
              <a href="#" className={styles.link}>Learn more &gt;</a>
              <a href="#" className={styles.link}>Buy &gt;</a>
            </div>
          </div>

          <div className={`${styles.gridItem} ${styles.card}`}>
            <h4 className={styles.gridTitle}>Card</h4>
            <p className={styles.gridSubtitle}>Get up to 3% Daily Cash back with every purchase.</p>
            <div className={styles.cta}>
              <a href="#" className={styles.link}>Learn more &gt;</a>
              <a href="#" className={styles.link}>Apply now &gt;</a>
            </div>
          </div>

          
          <div className={`${styles.gridItem} ${styles.tradeIn}`}>
            <h4 className={styles.gridTitle}>Trade In</h4>
            <p className={styles.gridSubtitle}>Upgrade and save. It's that easy.</p>
            <div className={styles.cta}>
              <a href="#" className={styles.link}>See what your device is worth &gt;</a>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default HomePage;