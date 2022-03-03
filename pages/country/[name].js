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
  const response = await fetch(url + 'name/' + name);
  const data = await response.json();

  return {
    props: { country: data },
  };
};

const CountryInfo = ({ country }) => {
  return (
    <div className='info'>
      {console.log(country)}
      <h1>{country[0].name}</h1>
      <h2>{country[0].nativeName}</h2>
    </div>
  );
};

export default CountryInfo;
