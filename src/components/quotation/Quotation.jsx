import styles from "./Quotation.module.scss";

function Quotation() {
  return (
    <div className={styles.card}>
      <div className={styles.card__description}>
        The brand seeks to build respect among the audience for its products, so that the presence of the company's
        products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the
        mass market.
      </div>

      <div className={styles.card__footer}>
        <div className={`${styles.card__person} ${styles.person}`}>
          <img className={styles.person__avatar} src="" alt="avatar"/>
          <div className={styles.person__naming}>
            <div className={styles.person__name}>Zara Boltaeva</div>
            <div className={styles.person__title}>CEO, Founder</div>
          </div>
        </div>

        <div className={styles.card__signature}>
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Quotation;
