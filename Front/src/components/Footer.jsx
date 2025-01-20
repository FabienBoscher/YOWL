import Gmail from '../assets/images/email.png';
import Twitter from '../assets/images/twitter.png';
import Facebook from '../assets/images/facebook.png';
import Pinterest from '../assets/images/pinterest.png';
import Google from '../assets/images/google.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-48">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.google.com/intl/fr/gmail/about/"
          className="transition-transform transform hover:scale-110"
        >
          <img src={Gmail} alt="Gmail" className="h-8 w-8" />
        </a>
        <a
          href="https://x.com/?lang=fr"
          className="transition-transform transform hover:scale-110"
        >
          <img src={Twitter} alt="Twitter" className="h-8 w-8" />
        </a>
        <a
          href="https://www.facebook.com/"
          className="transition-transform transform hover:scale-110"
        >
          <img src={Facebook} alt="Facebook" className="h-8 w-8" />
        </a>
        <a
          href="https://www.pinterest.fr/"
          className="transition-transform transform hover:scale-110"
        >
          <img src={Pinterest} alt="Pinterest" className="h-8 w-8" />
        </a>
        <a
          href="https://www.google.fr/"
          className="transition-transform transform hover:scale-110"
        >
          <img src={Google} alt="Google" className="h-8 w-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
