import styles from './About.module.scss';
import Quotation from "../../components/quotation/Quotation.jsx";

function About() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={`${styles.page_title} drop-shadow-lg text-5xl`}>About Boltaeva</div>
        <div>The brand seeks to build respect among the audience for its products, so that the presence of the
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          company's products is a sign of prestige, since the focus of the business is focused on exclusive sales,
          but not on the mass market. The brand seeks to build respect among the audience for its products, so
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          that the presence of the company's products is a sign of prestige, since the focus of the business is
          focused on exclusive sales, but not on the mass market.
        </div>
        <div className={styles.page_img}>
          <img src="../../../src/assets/img/about/Rectangle_37.png" alt="about"/>
        </div>
        <div>The brand seeks to build respect among the audience for its products, so that the presence of the
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          company's products is a sign of prestige, since the focus of the business is focused on exclusive sales,
          but not on the mass market.
        </div>
        <div className={`${styles.page_statistics} ${styles.statistics}`}>
          <div>
            <div className={styles.statistics_number}>600+</div>
            Man on the team
          </div>
          <div>
            <div className={styles.statistics_number}>1.6m</div>
            Followers at social network
          </div>
          <div>
            <div className={styles.statistics_number}>35</div>
            offline shop
          </div>
          <div>
            <div className={styles.statistics_number}>64</div>
            products of own production
          </div>
          <div>
            <div className={styles.statistics_number}>2x</div>
            Revenue growth every year
          </div>
          <div>
            <div className={styles.statistics_number}>3+</div>
            Location at world
          </div>
        </div>
        <div>The brand seeks to build respect among the audience for its products, so that the presence of the
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          company's products is a sign of prestige, since the focus of the business is focused on exclusive sales,
          but not on the mass market. The brand seeks to build respect among the audience for its products, so
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          that the presence of the company's products is a sign of prestige, since the focus of the business is
          focused on exclusive sales, but not on the mass market.
        </div>
        <div className={styles.page_img}><img src="../../../src/assets/img/about/./Rectangle_38.png" alt="about"/></div>
        <div className={styles.page_summary}>
          Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.
        </div>
        <Quotation/>
      </div>
    </div>
  )
}

export default About
