import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddUser() {
    let navigate=useNavigate();
    const[user,setUser]=useState({
        nom:"",
        prenom: ""
    });
    const{nom,prenom}=user;
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            // e.preventDefault();
            await axios.post("http://localhost:8080/user",user);
            navigate("/")
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounder-p4 mt-2 shadow">
                <h2 className="text-center m-3">Inscription</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type={"text"} className="form-control" placeholder="Entrez votre nom" name="nom" value={nom} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prenom</label>
                    <input type={"text"} className="form-control" placeholder="Entrez votre prenom" name="prenom" value={prenom} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button  className='btn btn-primary mx-2'>Inserer</button>
                <button type="submit" className="btn btn-outline-danger mx-2">Retour</button>
                </form>
                </div>
            </div>
        </div>
  )
}
