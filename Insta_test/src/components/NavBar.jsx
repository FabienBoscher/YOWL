import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-32">
        <div className="text-2xl font-bold">Hamstramgram</div>

        <div className="hidden sm:block">
          <input
            type="text"
            placeholder="Rechercher"
            className="bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
        </div>

        <div className="flex space-x-4">
          <button className="text-gray-600">🏠</button>
          <button className="text-gray-600">📩</button>
          <button className="text-gray-600">🔍</button>
          <button className="text-gray-600">❤️</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
