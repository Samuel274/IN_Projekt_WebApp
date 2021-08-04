import React, { useState, useContext } from 'react';
import axios from 'axios';
import {useParams ,useHistory} from 'react-router-dom';
import { AuthContext} from "../../Auth/AuthContext";
import './login.css';


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setAuthState} = useContext(AuthContext);

    

    let history = useHistory();

    const login = () => {
        const data = {username: username, password: password};
        axios.post("http://localhost:3001/users/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error); 
            } else {
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({username: response.data.username, id: response.data.id, status: true});
                history.push(`/dashboard/${response.data.id}`); /* Redirect after sucessful login*/
            }
        });
    };

    return (
        <div className="login">
            Logo
        <div className="loginContainer">
            <h1>Login</h1>
            <label>Username: </label>
            <input 
            type="text" 
            onChange={(event) => {
                setUsername(event.target.value);
            }}
            />
            <label>Password:</label>
            <input 
            type= "password" 
            onChange={(event) => {
                setPassword(event.target.value);
            }}
                
            />

            <button onClick={login} > Login </button>
        </div>
        </div>
    )
}

export default Login