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
        axios.post("http://62.171.138.202:3001/users/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error); 
            } else {
                localStorage.setItem("accessToken", response.data.token);               /**AccessToken Benutzerspezifisch setzen */
                setAuthState({username: response.data.username, id: response.data.id, status: true});
                history.push("/startseite"); /* Weiterleiten nach erfolgreichem login auf /startseite des Dashboards*/
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
                setUsername(event.target.value);                        /**Setzt Usernamen nach Submit*/
            }}/>
                    <span></span>
                    <label > Benutzername </label>
                </div>
                <div className="txt_field">
                <input type="password" required onChange={(event) => {
                setPassword(event.target.value);                        /**Setzt Passwort nach Submit*/
            }}/>
                <span></span>
                <label> Passwort </label>
                </div>
                <div className="pass">Passwort vergessen?</div>
                
            </form>
            
            <input type="submit" onClick={login} value="Login" />
            <div className="signup_link">
                     Noch kein Mitglied?
                    <a href="/registration">Registrieren</a>                 {/**Link zur Registrierungsseite */}
                </div>

        </div>
    )
}

export default Login
