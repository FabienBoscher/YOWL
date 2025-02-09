import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:1337/api/cookie-consents?filters[userId][$eq]=${userId}`)
        .then(res => res.json())
        .then(data => {
          if (data.data.length > 0) {
            localStorage.setItem("cookieConsent", data.data[0].attributes.consentChoice);
            setShowPopup(false);
          } else {
            setShowPopup(true);
          }
        })
        .catch(error => console.error("Erreur récupération consentement :", error));
    } else {
      setShowPopup(true);
    }
  }, [userId]);

  const saveConsentToStrapi = async (choice) => {
    let newUserId = userId || crypto.randomUUID();

    if (!userId) {
      setUserId(newUserId);
      localStorage.setItem("userId", newUserId);
    }

    try {
      await fetch("http://localhost:1337/api/cookie-consents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            userId: newUserId,
            consentChoice: choice,
          },
        }),
      });

      localStorage.setItem("cookieConsent", choice);
      setShowPopup(false);
    } catch (error) {
      console.error("Erreur lors de l'envoi à Strapi :", error);
    }
  };

  return (
    showPopup && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-xl w-96 max-w-full relative">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLlQlwdRm20kJdQSvZErXGX8hBLHzfEPyYg&s" alt="Cookies" className="w-full h-32 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gérer les cookies</h2>
          {!showOptions ? (
            <>
              <p className="text-gray-700 mb-6">
                Chez EKO, nous utilisons des cookies pour améliorer votre expérience. 
                Vous pouvez choisir accepter tous les cookies, de les refuser ou de gérer vos préférences. 
                Les cookies nous aident à fournir des fonctionnalités essentielles, 
                à comprendre utilisation de notre plateforme et à personnaliser votre expérience. Pour en savoir plus, 
                consultez notre Politique de Cookies.
              </p>
              <div className="flex space-x-3">
                <button 
                  onClick={() => saveConsentToStrapi("refused")} 
                  className="flex-1 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300">
                  Tout refuser
                </button>
                <button 
                  onClick={() => saveConsentToStrapi("accepted")} 
                  className="flex-1 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition duration-300">
                  Tout accepter
                </button>
              </div>
              <div className="mt-3">
                <button 
                  onClick={() => setShowOptions(true)} 
                  className="w-full py-2 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700 transition duration-300">
                  Plus options
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-700 mb-4">Choisissez les cookies à activer :</p>
              <div className="mb-6 space-y-3">
  <label className="flex items-center gap-2">
    <input type="checkbox" checked disabled className="w-5 h-5"/>
    <span>Cookies essentiels (toujours activés) : nécessaires au bon fonctionnement du site (authentification, sécurité).</span>
  </label>
  <label className="flex items-center gap-2">
    <input type="checkbox" className="w-5 h-5"/>
    <span>Cookies analytiques : mesure d’audience et amélioration des performances.</span>
  </label>
  <label className="flex items-center gap-2">
    <input type="checkbox" className="w-5 h-5"/>
    <span>Cookies de personnalisation : adaptation du contenu selon vos préférences.</span>
  </label>
  <label className="flex items-center gap-2">
    <input type="checkbox" className="w-5 h-5"/>
    <span>Cookies publicitaires : affichage de publicités ciblées (uniquement avec votre consentement).</span>
  </label>
</div>

              <button 
                onClick={() => saveConsentToStrapi("custom")} 
                className="w-full py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                Sauvegarder
              </button>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default CookieConsent;
