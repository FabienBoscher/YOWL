
const Post = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div>
          <h4 className="text-sm font-semibold">Utilisateur</h4>
          <span className="text-xs text-gray-500">Il y a 30 min</span>
        </div>
      </div>

      <div className="w-full h-64 bg-gray-200 mb-4"></div>

      <div className="flex items-center space-x-4 text-gray-600 mb-2">
        <button className="hover:text-black">❤️</button>
        <button className="hover:text-black">💬</button>
        <button className="hover:text-black">📤</button>
      </div>

      <p className="text-sm">
        <span className="font-semibold">Mamadou</span> news en mode commentaires
      </p>
    </div>
  );
};

export default Post;
