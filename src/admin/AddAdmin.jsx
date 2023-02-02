import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddAdmin() {
    let navigate=useNavigate();
    const[admin,setAdmin]=useState({
        identification:"",
        password:""
    });
    const{identification,password}=admin;
    const onInputChange=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            e.preventDefault();
            await axios.post("http://localhost:8080/admin",admin);
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
                    <label htmlFor="identification" className="form-label">Identification</label>
                    <input type={"identification"} className="form-control" placeholder="Identification" name="identification" value={admin.identification} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type={"password"} className="form-control" placeholder="Entrez votre password" name="password" value={admin.password} onChange={(e)=>onInputChange(e)}/>
                </div>
                
                <p> </p>
                <p><button  className='btn btn-primary mx-2'>Inserer</button></p>
                </form>
            </div>
        </div>
    </div>
  )
}
