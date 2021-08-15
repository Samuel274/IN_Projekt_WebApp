import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import './sidebar.css'
import {SidebarData} from './SidebarData';
import axios from 'axios';
import { SidebarDataLehrer } from './SidebarDataLehrer';
import { SidebarDataAdmin } from './SidebarDataAdmin';

function Sidebar() {

    let history = useHistory();

    const [authState, setAuthState] = useState(
        {
        username: "", 
        id: 0, 
        status: false,
        role: "",
      });

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({
          username: "", 
          id: 0, 
          status: false,
          role: "",
        });

          history.push("/");
      };

    useEffect(() => {
       if (localStorage.getItem('accessToken')) {
         axios.get('http://62.171.138.202:3001/users/auth', 
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
            };
          });
        };
      }, []);

    return (
        <div className="sidebar">

            <div className="sidebar__title">
             
            </div>
        
        <div className="sidebar__container">

             {authState.role === "Student" ? (    
             <ul className="SidebarList">
             {SidebarData.map((val, key) => {
                 return (
                     <li key={key} 
                     className="row"
                     id={window.location.pathname === val.link ? "active" : ""} 
                     onClick={() => 
                         {history.push(val.link)
                         }}
                     > 
                     <div id="icon">{val.icon}</div> 
                     <div id="title">{val.title}</div>                                
                     </li>
                 )
             })}
             </ul>
             ) : (<div></div> )}
            {(authState.role === "Lehrer") ? (
                <ul className="SidebarList">
                {SidebarDataLehrer.map((val, key) => {
                    return (
                        <li key={key} 
                        className="row"
                        id={window.location.pathname === val.link ? "active" : ""} 
                        onClick={() => 
                            {history.push(val.link)
                            }}
                        > 
                        <div id="icon">{val.icon}</div> 
                        <div id="title">{val.title}</div>                                
                        </li>
                    )
                })}
                </ul>
            ) : (
                <div></div>
            )}

            {(authState.role === "Admin") ? (
                <ul className="SidebarList">
                {SidebarDataAdmin.map((val, key) => {
                    return (
                        <li key={key} 
                        className="row"
                        id={window.location.pathname === val.link ? "active" : ""} 
                        onClick={() => 
                            {history.push(val.link)
                            }}
                        > 
                        <div id="icon">{val.icon}</div> 
                        <div id="title">{val.title}</div>                                
                        </li>
                    )
                })}
                </ul>
            ) : (
                <div></div>
            )}  
             <button className="logout__button" onClick={logout}> Logout</button>
           

            </div>
         </div>
       
    )
}

export default Sidebar
