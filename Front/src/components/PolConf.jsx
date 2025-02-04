import React from 'react'
import NavBar from './NavBar'
import Footer from "./Footer";


const Confidentialité = () => {
  return (

    <div>
      <NavBar/>
      <div className='flex flex-col gap-10 justify-center m-20 p-4'>
        
        <div>
          <h1 className='text-5xl font-semibold'>Politique de Confidentialité</h1>
        </div>

        <div>
          <h2 className='text-4xl font-semibold mt-4 mb-4'>1. Introduction</h2>
          <p className='text-lg'>Bienvenue sur Ekko. La présente Politique de Confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles conformément aux exigences du Règlement Général sur la Protection des Données (RGPD) et aux recommandations de la CNIL.</p>
        </div>

        <div>
          <h2 className='text-4xl font-semibold mt-4 mb-4'>2. Données collectées</h2>
          <p className='text-lg mb-2'>Nous collectons et traitons les données suivantes :</p>
          <ul className='text-lg list-disc ml-10'>
            <li><span className='font-semibold'>Identifiant de l'utilisateur :</span> création de posts, commentaires, likes anonymisés, blocages, signalements, masquages, shadowbans et signets.</li>
            <li><span className='font-semibold'>Contenu du post :</span> publication de posts.</li>
            <li><span className='font-semibold'>Date et heure de publication :</span> gestion des posts.</li>
            <li><span className='font-semibold'>Texte du commentaire :</span> gestion des commentaires.</li>
            <li><span className='font-semibold'>Référence au post concerné :</span> gestion des commentaires.</li>
            <li><span className='font-semibold'>URL du contenu consulté :</span> statistiques des vues.</li>
            <li><span className='font-semibold'>Timestamp (date et heure) :</span> enregistrement des vues et blocage de compte après plusieurs échecs de connexion.</li>
            <li><span className='font-semibold'>Adresse email :</span> confirmation de compte, double authentification et récupération de compte.</li>
            <li><span className='font-semibold'>Numéro de téléphone :</span> confirmation de compte, double authentification et récupération de compte.</li>
            <li><span className='font-semibold'>Paramètre "compte privé" :</span> gestion des paramètres de confidentialité.</li>
            <li><span className='font-semibold'>Liste des comptes bloqués :</span> gestion des blocages.</li>
            <li><span className='font-semibold'>Liste des comptes masqués :</span> gestion des masquages.</li>
            <li><span className='font-semibold'>Liste des mots masqués :</span> gestion du filtrage des contenus.</li>
            <li><span className='font-semibold'>Raison du signalement :</span> gestion des signalements.</li>
            <li><span className='font-semibold'>Description du signalement :</span> précisions facultatives des signalements.</li>
            <li><span className='font-semibold'>Liste des signets :</span> gestion des signets.</li>
            <li><span className='font-semibold'>Mot de passe (haché uniquement) :</span> connexion sécurisée et blocage après plusieurs tentatives infructueuses.</li>
            <li><span className='font-semibold'>Historique d’activité :</span> personnalisation des suggestions de comptes.</li>
            <li><span className='font-semibold'>Adresse IP (optionnelle) :</span> détection des tentatives de connexion frauduleuses.</li>
          </ul>
        </div>

        <div>
          <h2 className='text-4xl font-semibold mt-4 mb-4'>3. Base légale du traitement</h2>
          <p className='text-lg m-2'>Nous collectons vos données sur les bases légales suivantes :</p>
          <ul className='text-lg list-disc ml-10'>
            <li><span className='font-semibold'>Consentement :</span> paramétrage du compte privé, acceptation des cookies.</li>
            <li><span className='font-semibold'>Exécution du contrat :</span> création et gestion de votre compte.</li>
            <li><span className='font-semibold'>Obligations légales :</span> conservation des données pour lutter contre la fraude.</li>
            <li><span className='font-semibold'>Intérêt légitime :</span> amélioration de nos services, sécurité et personnalisation du contenu.</li>
          </ul>
        </div>

        <div>
          <h2 className='text-4xl font-semibold mt-4 mb-4'>4. Durée de conservation des données</h2>
          <p className='text-lg m-2'>Nous conservons vos données aussi longtemps que nécessaire :</p>
          <ul className='text-lg list-disc ml-10'>
            <li><span className='font-semibold'>Identifiants, posts, commentaires :</span> tant que votre compte est actif.</li>
            <li><span className='font-semibold'>Données de connexion (IP, tentatives de connexion) :</span> 6 mois.</li>
            <li><span className='font-semibold'>Historique d’activité :</span> 12 mois.</li>
            <li><span className='font-semibold'>Signalements et blocages :</span> 5 ans après la dernière interaction.</li>
            <li><span className='font-semibold'>Cookies :</span> selon leur type (voir Politique de Cookies ci-dessous).</li>
          </ul>
        </div>

        <div>
          <h2 className='text-4xl font-semibold mt-4 mb-4'>5. Partage des données</h2>
          <p className='text-lg m-2'>Vos données peuvent être partagées avec :</p>
          <ul className='text-lg list-disc ml-10'>
            <li>Nos prestataires techniques (hébergement, maintenance, sécurité).</li>
            <li>Autorités compétentes en cas de demande légale.</li>
            <li>Partenaires publicitaires (uniquement avec votre consentement).</li>
          </ul>
        </div>

        <div>
          <h2 className='text-4xl font-semibold mt-4 mb-4'>6. Vos droits</h2>
          <p className='text-lg m-2'>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className='text-lg list-disc ml-10'>
            <li><span className='font-semibold'>Droit d’accès :</span> consulter vos données.</li>
            <li><span className='font-semibold'>Droit de rectification :</span> corriger des informations erronées.</li>
            <li><span className='font-semibold'>Droit à l’effacement :</span> suppression de vos données sur demande.</li>
            <li><span className='font-semibold'>Droit à la portabilité :</span> récupération de vos données dans un format structuré.</li>
            <li><span className='font-semibold'>Droit d’opposition :</span> refus du traitement de certaines données.</li>
            <li><span className='font-semibold'>Droit à la limitation :</span> restriction temporaire du traitement de vos données.</li>
            <li><span className='font-semibold'>Droit de définir des directives post-mortem :</span> gestion de vos données après votre décès.</li>
          </ul>
          <p className='text-lg mt-2'>Pour exercer vos droits, contactez-nous à <span className='underline'>eko.notrecontact@gmail.com</span>.</p>
        </div>

        <div>
          <h2 className='text-4xl font-semibold mt-4 mb-4'>7. Sécurité des données</h2>
          <p className='text-lg'>Nous mettons en œuvre des mesures de sécurité avancées : chiffrement des mots de passe, surveillance des connexions suspectes et stockage sécurisé des informations.</p>
        </div>

        <div>
          <h2 className='text-4xl font-semibold mt-4 mb-4'>8. Contact et réclamations</h2>
          <p className='text-lg'>Pour toute question ou réclamation, contactez notre Délégué à la Protection des Données (DPO) à [adresse email]. Vous pouvez également adresser une plainte à la CNIL (www.cnil.fr).</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Confidentialité