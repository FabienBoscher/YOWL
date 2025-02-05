import React from 'react'
import NavBar from './NavBar'
import Footer from "./Footer";

const GérerCookies = () => {
  return (
    <div>
      <NavBar/>

      <div className='flex flex-col items-center gap-10 m-20 p-4'>
        <div className=''>

          <div>
            <h1 className="text-5xl font-semibold">Choisissez les cookies à activer :</h1>
          </div>

          <div className="">  
            <label className="flex gap-2 mt-8 mb-2 items-start">
              <input type="checkbox" checked disabled className="w-5 h-5 mt-1 ml-1"/>
              <div className='flex flex-col'>
                <h2 className='font-semibold'>Cookies essentiels (toujours activés) :</h2>
                <p>nécessaires au bon fonctionnement du site (authentification, sécurité).</p>
              </div>
            </label>

            <label className="flex  items-start gap-2 mt-2 mb-2">
              <input type="checkbox" className="w-5 h-5 mt-1 ml-1"/>
              <div className='flex flex-col'>
                <h2 className='font-semibold'>Cookies analytiques :</h2>
                <p>mesure d’audience et amélioration des performances.</p>
              </div>
            </label>

            <label className="flex  items-start gap-2 mt-2 mb-2">
              <input type="checkbox" className="w-5 h-5 mt-1 ml-1"/>
              <div className='flex flex-col'>
                <h2 className='font-semibold'>Cookies de personnalisation :</h2>
                <p>adaptation du contenu selon vos préférences.</p>
              </div>
            </label>

            <label className="flex  items-start gap-2 mt-2 mb-2">
              <input type="checkbox" className="w-5 h-5 mt-1 ml-1"/>
              <div className='flex flex-col'>
                <h2 className='font-semibold'>Cookies publicitaires :</h2>
                <p>affichage de publicités ciblées (uniquement avec votre consentement).</p>
              </div>
            </label>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default GérerCookies