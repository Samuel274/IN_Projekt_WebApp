import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './catalogue.css'
import Dashboard_Page from '../Dashboard_Page/Dashboard_Page';


function Catalogue() {

    const [modulesList, setModulesList] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3001/modules/") // Info 1 gibt alle Fragen des Themas 1 aus 
        .then((response) =>{
            setModulesList(response.data); // Funktioniert 
            console.log(response.data)
    });
}, []);



    return (
        <Dashboard_Page>
        <div className="catalogue">
            <h1>KATALOG</h1>
            {modulesList.map((value,key) => {
                return (<div key={key} className="modul">
                <div className="id">
                    {value.id}
                </div>
                <div className="title">
                    {value.title}
                </div>
                <div className="text">
                    {value.text}
                </div>

                </div>
            )})}
        </div>
        
        </Dashboard_Page>
    )
}

export default Catalogue
