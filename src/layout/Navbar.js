import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="btn btn-outline-dark" to="/addutilisateur">Inscription</Link>
                <Link className="btn btn-outline-dark" to="/">Se connecter</Link>
            </div>
        </nav>
    </div>
  )
}
