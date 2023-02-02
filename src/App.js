import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddUser from './users/AddUser';
import AddCompte from './compte/AddCompte';
import AddUtilisateur from './utilisateur/AddUtilisateur';
import LoginAdmin from './admin/LoginAdmin';
import Accueil from './pages/Accueil';
import Gestion from './pages/Gestion';
import AddCategorie from './Categorie/AddCategorie';
import NavAccueil from './layout/NavAccueil';
import GestionCategorie from './pages/GestionCategorie';
import AddAdmin from './admin/AddAdmin';
function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path="/" element={<LoginAdmin/>} />
              <Route exact path="/accueil" element={<Accueil/>} />
              <Route exact path="/addcompte" element={<AddCompte/>} />
              <Route exact path="/addadmin" element={<AddAdmin/>} />
              <Route exact path="/home" element={<Home/>} />
              <Route exact path="/gestion" element={<Gestion/>} />
              <Route exact path="/addcategorie" element={<AddCategorie/>} />
              <Route exact path="/categorie" element={<GestionCategorie/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
