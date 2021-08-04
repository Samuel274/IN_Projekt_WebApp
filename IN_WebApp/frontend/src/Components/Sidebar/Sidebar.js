import React, { useState, useEffect} from 'react';
import {SidebarData} from './SidebarData';
import {Link} from 'react-router-dom';



function Sidebar() {

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
      }; 


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
            <button onClick={logout}> <Link to="/" style={{ textDecoration: 'none' }}> LOGOUT </Link></button>
        </div>
    )
}

export default Sidebar
