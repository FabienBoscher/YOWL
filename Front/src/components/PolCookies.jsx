import React from 'react';
import NavBar from './NavBar'
import Footer from "./Footer";

const PolCookies = () => {
  return (
    <div>
        <NavBar/>
        <div className='flex flex-col gap-10 justify-center m-20 p-4'>
            <div>
                <h1 className='text-6xl font-semibold'>Politique relative aux Cookies</h1>
            </div>
            
            <div>
                <h2 className='text-4xl font-semibold mt-4 mb-4'>1. Qu’est-ce qu’un cookie ?</h2>
                <p className='text-lg'>Un cookie est un fichier stocké sur votre appareil permettant d’améliorer votre expérience utilisateur et d’analyser l’utilisation de notre plateforme.</p>
            </div>

            <div>
                <h2 className='text-4xl font-semibold mt-4 mb-4'>2. Types de cookies utilisés</h2>
                <p className='text-lg mb-2'>Nous utilisons les cookies suivants :</p>
                <ul className='text-lg list-disc ml-10'>
                    <li><span className='font-semibold'>Cookies essentiels :</span> nécessaires au bon fonctionnement du site (authentification, sécurité).</li>
                    <li><span className='font-semibold'>Cookies analytiques :</span> mesure d’audience et amélioration des performances.</li>
                    <li><span className='font-semibold'>Cookies publicitaires :</span> affichage de publicités ciblées (uniquement avec votre consentement).</li>
                    <li><span className='font-semibold'>Cookies de personnalisation :</span> adaptation du contenu selon vos préférences.</li>
                </ul>
            </div>

            <div>
                <h2 className='text-4xl font-semibold mt-4 mb-4'>3. Gestion des cookies</h2>
                <p className='text-lg m-2'>Lors de votre première visite, nous vous demandons votre consentement via une bannière. Vous pouvez modifier vos préférences à tout moment dans les paramètres de votre compte ou depuis notre gestionnaire de cookies.</p>

                <h2 className='text-4xl font-semibold mt-4 mb-4'>4. Durée de conservation des cookies</h2>
                <ul className='text-lg list-disc ml-10'>
                    <li><span>Cookies essentiels :</span> 12 mois.</li>
                    <li><span>Cookies analytiques et publicitaires :</span> 6 mois.</li>
                    <li><span>Cookies de personnalisation :</span> 12 mois.</li>
                </ul>

                <h2 className='text-4xl font-semibold mt-4 mb-4'>5. Contact</h2>
                <p className='text-lg m-2'>Pour toute question relative aux cookies, contactez-nous à <span className='underline'>eko.notrecontact@gmail.com</span>
                .</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PolCookies