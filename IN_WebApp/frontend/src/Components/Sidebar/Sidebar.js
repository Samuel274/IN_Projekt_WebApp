import React, { useState, useEffect} from 'react';
import {SidebarData} from './SidebarData';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { AuthContext} from "../../Auth/AuthContext";
import './sidebar.css';



function Sidebar() {

    const [id, setId] = useState();
  

    const [authState, setAuthState] = useState(
        {
        username: "", 
        id: 0, 
        status: false,
      });

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({
          username: "", 
          id: 0, 
          status: false,
          role: "",
        });
      }; 


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
                role: response.data.role,
              });
              setId(response.data.id);
            };
          });
        };
      }, []); 
    


    return (
        <div className="Sidebar__container">
            <ul className="SidebarList">
            {SidebarData.map((val, key) => {
                return (
                    <li key={key} 
                    className="row"
                    id={window.location.pathname == val.link ? "active" : ""} 
                    onClick={() => 
                        {window.location.pathname = val.link;
                        }}
                    > 
                    <div id="icon">{val.icon}</div> 
                    <div id="title">{val.title}</div>                                
                    </li>
                )
            })}
            </ul>

            Hallo
            {authState.username}

            <button className="logout__button" onClick={logout}> <Link to="/" style={{ textDecoration: 'none' }}> LOGOUT X </Link></button>
        </div>
    )
}

export default Sidebar
