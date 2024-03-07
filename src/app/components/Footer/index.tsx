import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
const socialItems = [
  {
    name: 'whatsapp',
    link: 'https://www.whatsapp.com/',
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/',
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/',
  },
];

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className='container'>
        <div className={styles.footerRow}>
          <div className={styles.socialIcons}>
            {socialItems.map((social, index) => (
              <div key={index}>
                <Link href={social.link}>
                  <Image
                    src={`/${social.name}.png`}
                    alt={social.name}
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.footerLinks}>
            <div>
              <Link href={'/contact'}>Contact</Link>
            </div>
            <div>
              <Link href={'/contact'}>Disclaimer</Link>
            </div>
            <div>
              <Link href={'/contact'}>Privacy Policy</Link>
            </div>
          </div>
          <p>&copy; 2020 EZ Franchise, Pvt. LTD. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
