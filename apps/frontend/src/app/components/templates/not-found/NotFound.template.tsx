import React from 'react';

import Header from '@/app/components/organisms/header/Header.organism';
import LinkButton from '@/app/components/parts/button/link-button/LinkButton.parts';
import HeadingSecondary from '@/app/components/parts/heading/heading-secondary/HeadingSecondary.parts';
import PikachuAngryImage from '@/assets/images/pikachu-angry.webp';

import styles from './NotFound.template.module.scss';

const NotFoundTemplate: React.FC = () => {
  return (
    <div className={styles['not-found-container']}>
      <Header />
      <div className={styles['content-wrapper']}>
        <div className={styles['not-found-title']}>
          <HeadingSecondary>404</HeadingSecondary>
          <img className={styles['not-found-sigh']} src={PikachuAngryImage} alt="pikachu-angry-image" />
        </div>
        <p className={styles['not-found-description']}>The page you are looking for could not be found.</p>
        <LinkButton href="/">Return to Top Page</LinkButton>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
NotFoundTemplate.whyDidYouRender = true;
export default NotFoundTemplate;
