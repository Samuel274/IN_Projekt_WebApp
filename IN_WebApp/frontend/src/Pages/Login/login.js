import React, { useState, useContext } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
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
                history.push("/startseite"); /* Redirect after sucessful login*/
            }
        });
    };

    return (
        <div className="login__center">
            <div className="login__top">
                <Link to="/">
                            <img className="home__logo"
                            src="https://pngimg.com/uploads/book/book_PNG51047.png" alt="logo"/>
                          </Link>
                <h1>Login</h1>
            </div>
            <form method="post">
                <div className="txt_field">
                    <input type="text" required onChange={(event) => {
                setUsername(event.target.value);
            }}/>
                    <span></span>
                    <label > Username </label>
                </div>
                <div className="txt_field">
                <input type="password" required onChange={(event) => {
                setPassword(event.target.value);
            }}/>
                <span></span>
                <label> Password </label>
                </div>
                <div className="pass">Forgot Password?</div>
                
            </form>
            
            <input type="submit" onClick={login} value="Login" />
            <div className="signup_link">
                    Not a member?
                    <a href="/registration">Sign Up</a>
                </div>

        </div>
    )
}

export default Login