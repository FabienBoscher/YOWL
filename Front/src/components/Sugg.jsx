import  { useState } from "react";
 
export default function AccountSettings() {
  const [isPrivate, setIsPrivate] = useState(false);
  const [username, setUsername] = useState("Utilisateur");
  const [email, setEmail] = useState("user@example.com");
  const [anonymousLikes, setAnonymousLikes] = useState(false);
  const [randomFriend, setRandomFriend] = useState("");
 
  const friendsSuggestions = [
    "Alice Dupont",
    "Jean Martin",
    "Sophie Lambert",
    "Luc Morel",
    "Emma Laurent",
  ];
 
  const generateRandomFriend = () => {
    const newFriend = friendsSuggestions[Math.floor(Math.random() * friendsSuggestions.length)];
    setRandomFriend(newFriend);
  };
 
  return (
<div className="max-w-md mx-auto p-6 border rounded-lg shadow-md bg-white">
<h2 className="text-lg font-semibold text-gray-700 mb-4">Paramètres du compte</h2>
 
      <div className="mb-4">
<label htmlFor="username" className="block text-gray-700 font-medium mb-1">
          Nom utilisateur
</label>
<input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
</div>
 
      <div className="mb-4">
<label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
<input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
</div>
 
      <div className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-gray-50">
<span className="text-gray-700 font-medium">Compte privé</span>
<div
          onClick={() => setIsPrivate(!isPrivate)}
          className={`relative w-11 h-6 flex items-center rounded-full cursor-pointer transition-colors ${
            isPrivate ? "bg-blue-600" : "bg-gray-300"
          }`}
>
<div
            className={`absolute left-1 w-4 h-4 bg-white rounded-full transition-transform ${
              isPrivate ? "translate-x-5" : "translate-x-0"
            }`}
          />
</div>
</div>
 
      <div className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-gray-50 mt-4">
<span className="text-gray-700 font-medium">Likes anonymes</span>
<div
          onClick={() => setAnonymousLikes(!anonymousLikes)}
          className={`relative w-11 h-6 flex items-center rounded-full cursor-pointer transition-colors ${
            anonymousLikes ? "bg-blue-600" : "bg-gray-300"
          }`}
>
<div
            className={`absolute left-1 w-4 h-4 bg-white rounded-full transition-transform ${
              anonymousLikes ? "translate-x-5" : "translate-x-0"
            }`}
          />
</div>
</div>
 
      <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-50">
<p className="text-gray-700 font-medium">Suggestion ami :</p>
        {randomFriend && <p className="text-blue-600 font-semibold">{randomFriend}</p>}
<button
          onClick={generateRandomFriend}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
>
          Nouvel ami
</button>
</div>
</div>
  );
}

