import React from 'react';

import Link from 'next/link';

import { PageLayout } from '@c/PageLayout';
import styles from '../styles/Home.module.css';

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  return (
    <PageLayout title='News-App: About'>
      <div className={styles.container}>
        <h1>About!</h1>
        <Link href='/'>Ir al Home</Link>
      </div>
    </PageLayout>
  )
};

export default About;
