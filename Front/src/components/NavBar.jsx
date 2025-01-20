import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Boot from '../assets/images/boot.png';
import { House, LogIn, Users, Heart, UserPlus } from 'lucide-react';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold">
          <Link to="/">
            <img
              className="size-32 w-auto object-contain hover:scale-125 transition-transform duration-300"
              src={Boot}
              alt="Logo"
            />
          </Link>
        </div>

        <nav>
          <ul className="flex space-x-6">
            {!isHomePage && (
              <>
                <li>
                  <Link to="/" className="hover:text-gray-400 transition-colors duration-200">
                    <House />
                  </Link>
                </li>
              </>
            )}

            {isHomePage ? (
              <>
                <li>
                  <Link to="/login" className="hover:text-gray-400 transition-colors duration-200">
                    <LogIn />

                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="hover:text-gray-400 transition-colors duration-200">
                    <UserPlus />

                  </Link>
                </li>
              </>
            ) : user ? (
              <>
                <li>
                  <Link to="/profil" className="hover:text-gray-400 transition-colors duration-200">
                    <Users />
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="hover:text-gray-400 transition-colors duration-200">
                    <Heart />
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="hover:text-gray-400 transition-colors duration-200">
                  <LogIn />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
