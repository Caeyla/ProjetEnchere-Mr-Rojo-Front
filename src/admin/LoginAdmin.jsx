import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';
export default function LoginAdmin() {
    const[admin,setAdmin]=useState([]);
    // useEffect(()=>{
    //     loadUsers();
    // },[]);
    let navigate=useNavigate();
    const[login,setLogin]=useState({identification:'',password:''});
    const{identification,password}=login;
    const onInputChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            e.preventDefault();
            const result=await axios.post("http://localhost:8080/loginAdmin", {identification, password} );
            setAdmin(result.data); 
            // const result=await axios.post("http://localhost:8080/loginUser?email="+email+"&password="+password);
            if(result.data.length>=1){
                navigate("/accueil");
            }
            else{
                alert("Email ou mot de passe incorrecte");
            }
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <div className="login">
        <Navbar/>
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounder-p4 mt-2 shadow">
                <h2 className="text-center m-3">Login</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="identification" className="form-label">email</label>
                    <input type={"text"} className="form-control" placeholder="Identification" name="identification" value={login.identification} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type={"password"} className="form-control" placeholder="Entrez votre password" name="password" value={login.password} onChange={(e)=>onInputChange(e)}/>
                </div>
                <p> </p>
                <p><button  className='btn btn-primary mx-2'>Inserer</button>
                <button type="submit" className="btn btn-outline-danger mx-2">Retour</button></p>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
