import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const response = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Inscription réussie :", data);
        alert("Inscription réussie !");
        navigate("/login");
      } else {
        console.error("Erreur :", data);
        alert("Erreur : " + data.error.message);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("Erreur réseau : " + error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen bg-gray-100 animate-gradient">
        <form
          onSubmit={handleSubmit}
          className="p-10 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl space-y-8 w-full max-w-md transform transition duration-300 hover:scale-105 hover:shadow-3xl"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 text-center hover:text-gray-500 transition">
            Crée ton Compte
          </h2>
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 transition"
            >
              {`Nom D'utilisateur`}
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-3 mt-2 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-transparent transition-all hover:shadow-lg"
              placeholder="Votre Nom d'Utilisateur"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 mt-2 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-transparent transition-all hover:shadow-lg"
              placeholder="Votre email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Mot de Passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 mt-2 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-transparent transition-all hover:shadow-lg"
              placeholder="Votre Mot de Passe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Confirmer le Mot de Passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-5 py-3 mt-2 text-lg border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-transparent transition-all hover:shadow-lg"
              placeholder="Confirmez votre Mot de Passe"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-xl font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:from-gray-700 hover:to-gray-900 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
