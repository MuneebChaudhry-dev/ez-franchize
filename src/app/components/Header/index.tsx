import React from 'react';
import styles from './header.module.css';
import Navbar from '../Navbar';
import Button from '../common/Button';
import HeaderCarousel from '../HeaderCarousel';

const Header = () => {
  return (
    <section className={styles.header}>
      <Navbar />
      <div className={`${styles.headerContainer}`}>
        <div className='container'>
          <div className={styles.headerRow}>
            <div className={styles.headerContent}>
              <h1>Find the Best Franchises in Pakistan</h1>
              <p>Get all relevent information you need in one place!</p>
              <Button className={styles.availableFranchisesBtn}>
                See Available Franchises
              </Button>
            </div>
            <div className={styles.carousel}>
              <HeaderCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
