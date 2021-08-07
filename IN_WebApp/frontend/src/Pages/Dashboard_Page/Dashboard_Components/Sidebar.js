import React from 'react'
import './sidebar.css'
import {SidebarData} from './SidebarData';

function Sidebar() {
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
 
            </div>
         </div>
       
    )
}

export default Sidebar
