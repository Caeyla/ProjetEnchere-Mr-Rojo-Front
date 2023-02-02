import React from 'react'
import { Link } from 'react-router-dom'
import './NavBarUser.css';
export default function NavbarUser() {
  return (
    <div class="navbarUser">
        <div class="navbar bg-dark" data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <label htmlFor="Accueil" className="form-label">Accueil</label>
            </div>
        </nav>
        </div>
        <div className='gestion'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Gestion</a>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="btn btn-outline-dark" to="/categorie">Categorie</Link>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="btn btn-outline-dark" to="/compteClient">Compte Client</Link>
            </div>
        </nav>
        </div>
        <div className='statistique'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Statistique</a>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="btn btn-outline-dark" to="/categorie">Categorie</Link>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="btn btn-outline-dark" to="/compteClient">Compte Client</Link>
            </div>
        </nav>
        </div>
        <div className='Rechargement compte'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Rechargement compte</a>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="btn btn-outline-dark" to="/categorie">Validation</Link>
            </div>
        </nav>
        </div>
    </div>
    
    
    
  )
}
