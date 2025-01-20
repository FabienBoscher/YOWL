import { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlist(storedWishlist);
    } catch (error) {
      console.error('Erreur lors de la récupération de la wishlist:', error);
      setWishlist([]);
    }
  }, []);

  const clearWishlist = () => {
    if (window.confirm('Tu es sûr de vouloir vider votre wishlist ?')) {
      setWishlist([]);
      localStorage.removeItem('wishlist');
    }
  };

  if (wishlist.length === 0) {
    return (
      <>
        <NavBar />
        <p className="text-center mt-10 text-lg">Votre wishlist est vide.</p>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center p-5">
        <h1 className="text-3xl font-bold mb-5">Ma Wishlist</h1>
        <button
          className="bg-gray-700 text-white py-2 px-4 rounded-md font-bold mb-5 hover:bg-gray-600"
          onClick={clearWishlist}
        >
          Vider la wishlist
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {wishlist.map((product) => (
            <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-2 truncate">{product.name}</h2>
              <p className="text-gray-700">{product.price} €</p>
              <button
                className="bg-red-600 text-white py-1 px-3 rounded-md font-bold mt-2 hover:bg-red-500"
                onClick={() => {
                  if (window.confirm('Êtes-vous sûr de vouloir retirer cet article de votre wishlist ?')) {
                    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
                    setWishlist(updatedWishlist);
                    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
                  }
                }}
              >
                Retirer
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
