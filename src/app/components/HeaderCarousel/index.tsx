import React from 'react';
import styles from './headerCarousel.module.css';
import Image from 'next/image';
const franchises = [
  'chinaTown',
  'jessieBurger',
  'macDonald',
  'optp',
  'pizzaHut',
  'secondCup',
  'subway',
  'tayto',
  'wildwings',
];
const HeaderCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        {franchises.map((franchise, index) => (
          <div
            key={franchise}
            className={`${styles.singleImage} ${styles[`image${index}`]}`}
          >
            <Image
              src={`/${franchise}.webp`}
              alt={franchise}
              width={150}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderCarousel;
