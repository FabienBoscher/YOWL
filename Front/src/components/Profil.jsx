import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
      setEditedData(userData);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUser(editedData);
    localStorage.setItem('user', JSON.stringify(editedData));
    setIsEditing(false);
  };

  if (!user) {
    return <p>Chargement des données...</p>;
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Profil utilisateur</h1>

        <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto">
          <div className="mb-4">
            <strong className="font-medium">Nom utilisateur :</strong>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={editedData.username}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded-md"
              />
            ) : (
              <p className="text-lg text-gray-700">{user.username}</p>
            )}
          </div>
          <div className="mb-4">
            <strong className="font-medium">Email :</strong>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded-md"
              />
            ) : (
              <p className="text-lg text-gray-700">{user.email}</p>
            )}
          </div>
          <div className="mb-4">
            <strong className="font-medium">Mot de passe :</strong>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={editedData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded-md"
              />
            ) : (
              <p className="text-lg text-gray-700">*******</p>
            )}
          </div>
          <div className="mb-4">
            <strong className="font-medium">Date de création :</strong>
            <p className="text-lg text-gray-700">{formatDate(user.createdAt)}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-green-600 mr-4"
            >
              Enregistrer
            </button>
          ) : (
            <button
              onClick={handleEditToggle}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-600 mr-4"
            >
              Modifier
            </button>
          )}
          <button
            onClick={handleLogout}
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-red-600"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
