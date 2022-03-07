import { useEffect, useState } from 'react';
import Link from 'next/link';
import Loading from './../../components/Loading';

const url = 'https://restcountries.com/v2/';

export const getStaticPaths = async () => {
  try {
    const response = await fetch(url + 'all');
    const data = await response.json();

    const paths = data.map((country) => {
      return {
        params: { name: country.name },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const response = await fetch(url + 'name/' + name + '?fullText=true');
  const data = await response.json();

  return {
    props: { country: data },
  };
};

const getValuesArr = (obj) => {
  if (obj) {
    return Object.keys(obj).map((key) => obj[key]);
  } else {
    return null;
  }
};

const CountryInfo = ({ country }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country[0];

  const [bordersArr, setBordersArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBordersFullName = async (borders) => {
    setLoading(true);
    const codeUrl = 'https://restcountries.com/v2/alpha/';

    const borderNames = await Promise.all(
      borders.map(async (ctry) => {
        const names = await fetch(codeUrl + ctry + '?fields=name');
        return names.json();
      })
    ).then((result) => setBordersArr(result));

    setLoading(false);
  };

  useEffect(() => {
    getBordersFullName(borders);
  }, [borders]);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className='info'>
      {/* <img src={flag} alt={`${name} flag`} /> */}
      <h1>{name}</h1>
      <h2>{nativeName}</h2>
      <p>{new Intl.NumberFormat().format(population)}</p>
      <p>{region}</p>
      <p>{subregion}</p>
      <p>{capital}</p>
      <p>{topLevelDomain.join(', ')}</p>
      <p>{`${currencies[0].name} (${currencies[0].symbol})`}</p>

      {languages ? (
        <p className='p'>
          <span>Languages: </span>
          {languages[0].name}
        </p>
      ) : null}

      {bordersArr ? (
        <div>
          {bordersArr.map((ctry, index) => (
            <Link href={ctry.name} key={index}>
              <button>{ctry.name}</button>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CountryInfo;
