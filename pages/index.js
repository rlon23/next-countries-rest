import CountryCard from '../components/CountryCard';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';

const url =
  'https://restcountries.com/v2/all?fields=name,capital,region,flag,population';

export const getStaticProps = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      props: { countries: data },
    };
  } catch (error) {
    console.log(error);
  }
};

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className={styles.Home}>
        <div className='page__search'>
          <p>search bar</p>
          <p>filter</p>
        </div>
        <ul className={styles.CountriesList}>
          {countries.map((country) => (
            <CountryCard
              href={'/country/' + country.name}
              key={country.name}
              {...country}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
