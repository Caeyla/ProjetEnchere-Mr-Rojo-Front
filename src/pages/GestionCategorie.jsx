import React from 'react'
import ListCategorie from '../Categorie/ListCategorie'
import NavAccueil from '../layout/NavAccueil'
import NavGestion from '../layout/NavGestion'

export default function GestionCategorie() {
  return (
    <div>
        <div className='gestion'>
            <NavAccueil/>
            <NavGestion/>
        </div>
        <div>
            <ListCategorie/>
        </div>
    </div>
    
  )
}
