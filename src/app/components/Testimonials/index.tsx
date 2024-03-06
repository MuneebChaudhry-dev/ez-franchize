'use client';
import React from 'react';
import styles from './testimonials.module.css';
import TestimonialCarousel from './Carousel';
export const carouselData = [
  {
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros id quam tristique semper.',
  },
  {
    name: 'Jane Smith',

    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    name: 'Alex Johnson',

    description:
      'Fusce dignissim felis sit amet justo dictum, sit amet tempor lectus viverra.',
  },
  {
    name: 'Emily Brown',

    description:
      'Aliquam erat volutpat. Sed nec mi nec sem dictum posuere. Sed ac elit et metus rhoncus posuere.',
  },
  {
    name: 'Michael Williams',

    description:
      'Vestibulum auctor nunc et lorem consectetur, nec consequat risus scelerisque.',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className='container'>
        <div className={`${styles.testimonialsContainer}`}>
          <div className={styles.testimonialHeader}>
            <h2>Success Stories</h2>
            <p>Ez-Franchise Client Testimonials</p>
          </div>
          <div>
            <TestimonialCarousel slides={carouselData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
