import Link from 'next/link';

const Header = () => {
  return (
    <div className='Header'>
      <Link href='/'>
        <a>Where in the world?</a>
      </Link>
      <p>Dark Mode</p>
    </div>
  );
};

export default Header;
