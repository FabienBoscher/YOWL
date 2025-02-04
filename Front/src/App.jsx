import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Wishlist from './components/Wishlist';
import Profil from './components/Profil';
import Register from './components/Register';
import PolConf from './components/PolConf';
import PolCookies from './components/PolCookies';
import GéreCookies from './components/GérerCookies';


function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/politiques/confidentialié" element={<PolConf/>}/>
            <Route path="/politiques/cookies" element={<PolCookies />} />
            <Route path="/gérer/cookies" element={<GéreCookies />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
