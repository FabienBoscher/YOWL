import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message || "Erreur inconnue");
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 animate-gradient">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-200 transform transition-transform hover:scale-105 hover:shadow-3xl">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-4">Connexion</h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Connectez-vous pour accéder à votre compte
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-700 placeholder-gray-400 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 transition-transform hover:scale-105"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-700 placeholder-gray-400 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 transition-transform hover:scale-105"
            />
            <button
              type="submit"
              className="w-full py-3 bg-slate-700 text-white font-bold rounded-xl shadow-lg hover:from-orange-500 hover:to-red-500 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 transition-transform hover:scale-105"
            >
              Se connecter
            </button>
          </form>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Pas encore inscrit ?{" "}
              <a
                href="/signup"
                className="text-yellow-500 hover:underline hover:text-yellow-600 transition-transform hover:scale-110"
              >
                Créer un compte
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
