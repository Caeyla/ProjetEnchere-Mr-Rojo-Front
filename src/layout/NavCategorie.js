import React from 'react'
import { Link } from 'react-router-dom'

export default function NavCategorie() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="btn btn-outline-dark" to="/addcategorie">Add Categorie</Link>
                <Link className="btn btn-outline-dark" to="/categorie">Categorie</Link>
            </div>
        </nav>
    </div>
  )
}
