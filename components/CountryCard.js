import Link from 'next/link';
import styles from './../styles/CountryCard.module.scss';

const CountryCard = ({
  name,
  href,
  population,
  region,
  capital,
  flag,
  darkMode,
}) => {
  return (
    <Link href={href}>
      <li className={`${styles.CountryCard} has_shadow`}>
        <div className={styles.CountryCard__flag}>
          <img src={flag} alt='' />
        </div>

        <div className={styles.CountryCard__info}>
          <h3 className={styles.CountryCard__name}>{name}</h3>
          <p className={styles.CountryCard__population}>
            <span>Population: </span>
            {new Intl.NumberFormat().format(population)}
          </p>
          <p className={styles.CountryCard__region}>
            <span>Region: </span>
            {region}
          </p>

          {capital ? (
            <p className={styles.CountryCard__capital}>
              <span>Capital: </span>
              {capital}
            </p>
          ) : null}
        </div>
      </li>
    </Link>
  );
};

export default CountryCard;
