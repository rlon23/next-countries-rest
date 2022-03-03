import Image from 'next/image';
import Link from 'next/link';

const url = 'https://restcountries.com/v3.1/all';

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
    <main>
      <div className='page__search'>
        <p>search bar</p>
        <p>filter</p>
      </div>
      <div className='countries-list'>
        {countries.map((country) => (
          <Link href={'/country/' + country.name.common} key={country.cca3}>
            <li>
              <a>{country.name.common}</a>
              <Image src={country.flags.svg} width={200} height={100} />
            </li>
          </Link>
        ))}
      </div>
    </main>
  );
}
