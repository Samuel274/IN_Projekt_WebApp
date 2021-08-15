import React from 'react'
import { useState} from "react";
import Menubar from './Dashboard_Components/Menubar';
import Sidebar from './Dashboard_Components/Sidebar';
import './Dashboard_Page.css'
import MenuIcon from '@material-ui/icons/Menu';

const Dashboard_Page = function({children}){

    const [show, setShow] = useState(true);

    return (
    <div className="dashboard_page">
        <div className="page__grid">
            <div className="page__header">
                <Menubar />
                <button className="page__burgermenu" onClick={()=>setShow(!show)}> <MenuIcon /> </button>
            </div>
            <div className="page__title">
               
            </div>
        
        <div className="page__center"> 
            <div className="page__sidebar">
                {
                    show?<Sidebar />:null
                }
                
            </div>
            <div className="page__content">
                {children}
            </div>
        </div>
        <div className="page__footer">
            Footer
        </div>
        </div>
    
    </div>
    )
}


export default Dashboard_Page;