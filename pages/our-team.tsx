import React from 'react';
import Layout from '../components/Layout';
import TeamHero from '../components/TeamHero';
import ImageAndTextBlock from '../components/ImageAndTextBlock';
import styles from './img-alignments.module.css';

const Home: React.FC = () => {
  return (
    <Layout>
      <TeamHero />
      <div className="staff">
        <ImageAndTextBlock
          bgColor="rgb(72,71,169)"
          headerText="Rod Costa"
          bgImage="./rod.jpg"
          buttonShown={false}
          imgId={styles.rodImg}
        >
          Rod hates giving orders, even though he is the boss of Akron Snowmen. He has
          been in the business of snow removal for 17(fake) years, and is incredibly good
          at his job, everything except giving orders.
        </ImageAndTextBlock>
        <ImageAndTextBlock
          bgColor="rgb(68,67,160)"
          headerText="Kristi Ensminger"
          bgImage="./kristi.jpg"
          buttonShown={false}
          right={true}
          imgId={styles.kristiImg}
        >
          Kristi stretches before every day of work, and likes exercising in the off
          season.
        </ImageAndTextBlock>
        <ImageAndTextBlock
          bgColor="rgb(65,64,152)"
          headerText="Josué Rodríguez"
          bgImage="./josue2.jpg"
          buttonShown={false}
          imgId={styles.josueImg}
        >
          Josue hates stretching, and has never seen the point in voluntarily exercising.
          At 37 he still gets a kick out of sledding once a storm is over.
        </ImageAndTextBlock>
      </div>
    </Layout>
  );
};

export default Home;
