import Image from 'next/image';
import styles from './page.module.css';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
