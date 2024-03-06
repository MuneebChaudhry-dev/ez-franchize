import { useState } from 'react';
import styles from './carousel.module.css';
import Image from 'next/image';
import leftArrow from '@/app/assets/arrow-left.svg';
import rightArrow from '@/app/assets/arrow-right.svg';

const TestimonialCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.leftArrow} onClick={prevSlide}>
        <Image src={leftArrow} width={40} alt='left Cursor' />
      </div>
      <div className={styles.rightArrow} onClick={nextSlide}>
        <Image src={rightArrow} width={40} alt='right Cursor' />
      </div>
      {slides.map((slide, index) => {
        const slideClasses = [
          styles.slide,
          index === current ? styles.active : '',
          index === current + 1 ? styles.next : '',
          index === current - 1 ? styles.prev : '',
        ].join(' ');

        return (
          <div className={slideClasses} key={index}>
            {index === current && (
              <div className={styles.slideItem}>
                <Image
                  src={'/double-qoute.png'}
                  width={100}
                  height={100}
                  alt='qoute'
                />
                <p>{slide.description}</p>
                <div className={styles.slideThumbnail}>
                  <Image
                    src={'/avatar.png'}
                    alt={slide.name}
                    width={100}
                    height={100}
                  />
                  <div className={styles.playBtn}>
                    <Image
                      src={'/playBtn.png'}
                      alt='playbtn'
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <h3>{slide.name}</h3>
                <p>Franchiser</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default TestimonialCarousel;
