'use client';
import React, { useState } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import userAvatar from '@/app/assets/male-user.png';
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const toggleProfileMenu = () =>
    setShowProfileMenu((profileMenu) => !profileMenu);
  const router = useRouter;

  const isActive = (href: string) => router.pathname === href;
  return (
    <div className={`${styles.navbarWrapper} container`}>
      <div className={styles.navbarMenu}>
        <div className={styles.logo}>
          <Image src='./ez.svg' width={160} height={32} alt='website Logo' />
        </div>

        <nav className={styles.nav}>
          <ul>
            <li className={isActive('/') ? styles.activeRoute : ''}>
              <Link href='/'>Home</Link>
            </li>
            <li className={isActive('/about') ? styles.activeRoute : ''}>
              <Link href='/about'>How it Works</Link>
            </li>
            <li
              className={
                isActive('/about-franchises') ? styles.activeRoute : ''
              }
            >
              <Link href='/'>Available Franchises </Link>
            </li>
            <li
              className={
                isActive('/franchising-guide') ? styles.activeRoute : ''
              }
            >
              <Link href='/'>Franchising Guide </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.navbarProfile}>
        <Link href='/'>Apply for Franchise</Link>

        <span className={styles.separator}></span>
        <Link href='/'>Add your Franchise</Link>

        <div className={styles.userAvatar} onClick={toggleProfileMenu}>
          <Image src={userAvatar} alt='user avatar' />
          <div
            style={{ display: showProfileMenu ? 'block' : 'none' }}
            className={styles.userProfile}
          >
            <div>
              <Link href='/'>Login</Link>
            </div>
            <div>
              <Link href='/'>SignUp</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
