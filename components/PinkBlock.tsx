import React from 'react';
import styles from './PinkBlock.module.css';
import PinkGrid from './PinkGrid';
import Button from './Button';
import BodyText from './BodyText';

const PinkBlock: React.FC = () => {
  return (
    <div className={styles.pinkBlock} id="pinkBlock">
      <h2 className={styles.h1}>Our Services</h2>
      <BodyText className={styles.p}>
        Akron Snowmen plows industrial, commercial, and corporate properties in the Akron
        area. We have the tools, the skills, and the willingness to plow, shovel, and salt
        your property, quickly, and keep your customers happy.
      </BodyText>
      <PinkGrid />
      <div className={styles.buttonWrapper}>
        <Button width="200px">CONTACT US</Button>
      </div>
    </div>
  );
};

export default PinkBlock;
