import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 flex flex-col justify-center j">

      <div className='flex justify-center text-white m-2 '>
        <Link to='/politiques/confidentialié'
          className='hover:underline pr-2 pl-2'
        >
          Politique de Confidentialité
        </Link>

        <Link to='/politiques/cookies'
          className='hover:underline pr-2 pl-2'
        >
          Politique relative aux cookies
        </Link>

        <Link to='/gérer/cookies'
          className='hover:underline pr-2 pl-2'
        >
          Gérer les cookies
        </Link>
      </div>

    </footer>
  );
};

export default Footer;
