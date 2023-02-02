import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddCategorie() {
    let navigate=useNavigate();
    const[categorie,setCategorie]=useState({
        nom:""
    });
    const{nom}=categorie;
    const onInputChange=(e)=>{
        setCategorie({...categorie,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            e.preventDefault();
            await axios.post("http://localhost:8080/categorie",categorie);
            navigate("/")
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounder-p4 mt-2 shadow">
                <h2 className="text-center m-3">Inserer categorie</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type={"text"} className="form-control" placeholder="Entrez votre nom" name="nom" value={categorie.nom} onChange={(e)=>onInputChange(e)}/>
                </div>
                
                <p> </p>
                <p><button  className='btn btn-primary mx-2'>Inserer</button></p>
                </form>
            </div>
        </div>
    </div>
  )
}
