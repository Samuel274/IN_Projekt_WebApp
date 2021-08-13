import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import './sidebar.css'
import {SidebarData} from './SidebarData';

function Sidebar() {

    let history = useHistory();

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
          status: false});

          history.push("/");
      };
    return (
        <div className="sidebar">

            <div className="sidebar__title">
             
            </div>
        
        <div className="sidebar__container">
                  
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
             <button className="logout__button" onClick={logout}> Logout</button>
            </div>
         </div>
       
    )
}

export default Sidebar
