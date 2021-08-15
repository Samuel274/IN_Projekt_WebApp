import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';
import Dashboard_Page from '../Dashboard_Page/Dashboard_Page'
import { AuthContext} from "../../Auth/AuthContext";
import './profile.css'


function Profile() {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    

    let history = useHistory();

    const [authState, setAuthState] = useState(
        {
        username: "", 
        id: 0, 
        status: false,
      });

      const [id, setId] = useState();

    const changePassword = () => {
        axios.put("http://localhost:3001/users/changepassword", {
            oldPassword: oldPassword, 
            newPassword: newPassword,
        },
         {
             headers: {
                 accessToken: localStorage.getItem("accessToken"),
             },
         }
        ).then((response) => {
            if (response.data.error){
                alert(response.data.error);
            }
        });
        ;

    }

    const deleteAccount = () => {
        const username = authState.username;
        console.log("Username " + username)
        axios.delete(`http://localhost:3001/users/delete/${username}`,).then(() => {
          history.push("/");
        localStorage.removeItem("accessToken");
        setAuthState({
          username: "", 
          id: 0, 
          status: false,
          role: "",
        });
    })
    }

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
          axios.get('http://localhost:3001/users/auth', 
          {headers: {
            accessToken: localStorage.getItem('accessToken'),
          },
        })
        .then((response) => {
            if(response.data.error){
              setAuthState({...authState, status: false}); /*Only change Status */
            } else {
              setAuthState({
                username: response.data.username, 
                id: response.data.id, 
                status: true,
              });
              setId(response.data.id);
            };
          });
        };
      }, []);  


    return (
        <Dashboard_Page>
        
            <h1>Profil von {authState.username}</h1>
        <div className="change__password">   
            <h2>Passwort ändern:</h2>
            <label>Altes Passwort: </label>
            <input type="text" placeholder="Altes Passwort..." onChange={(event) => {setOldPassword(event.target.value)}}/>
            <label>Neues Passwort:</label>
            <input type="text" placeholder="Neues Passwort..." onChange={(event) => {setNewPassword(event.target.value)}}/>
            <button className="change__passwordButton" type="submit" onClick={changePassword}> Passwort ändern </button>  
        </div>

        <div className="delete__account">
            <button className="delete__accountButton" onClick={deleteAccount}>Account löschen</button>
        </div>
        </Dashboard_Page>
    )
}

export default Profile
