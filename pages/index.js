import Image from 'next/image';
import Link from 'next/link';

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
    <main>
      <div className='page__search'>
        <p>search bar</p>
        <p>filter</p>
      </div>
      <div className='countries-list'>
        {countries.map((country) => (
          <Link href={'/country/' + country.name} key={country.name}>
            <li>
              <a>{country.name}</a>
              <Image src={country.flag} width={200} height={100} />
            </li>
          </Link>
        ))}
      </div>
    </main>
  );
}
