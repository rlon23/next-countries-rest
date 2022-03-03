const url = 'https://restcountries.com/v3.1/';

export const getStaticPaths = async () => {
  try {
    const response = await fetch(url + 'all');
    const data = await response.json();

    const paths = data.map((country) => {
      return {
        params: { name: country.name.common.toString() },
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
      <h1>{country[0].name.official}</h1>
    </div>
  );
};

export default CountryInfo;
