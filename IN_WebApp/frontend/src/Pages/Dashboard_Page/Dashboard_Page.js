import React from 'react'
import { useState, useEffect } from "react";
import Menubar from './Dashboard_Components/Menubar';
import Sidebar from './Dashboard_Components/Sidebar';
import './Dashboard_Page.css'
import Startseite from './Dashboard_Components/Startseite';

const Dashboard_Page = function({children}){


    return (
    <div className="dashboard_page">
        <div className="page__grid">
            <div className="page__header">
                <Menubar />
            </div>
            <div className="page__title">
               
            </div>
        
        <div className="page__center"> 
            <div className="page__sidebar">
                <Sidebar />
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