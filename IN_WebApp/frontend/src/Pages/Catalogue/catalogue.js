import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './catalogue.css'
import Dashboard_Page from '../Dashboard_Page/Dashboard_Page';
import Module from '../../Components/Module/Module';


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
                <div className="catalogue__row">
                <Module id="1" title='HTML5' beschreibung={"HTML für Einsteiger um eine Webapplikation zu gestalten!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/html5/html5-original.svg' rating={4}/>
                <Module id="1" title='CSS3' beschreibung={"Lerne heute noch das Designen mit CSS!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/css3/css3-original.svg' rating={5}/>
                <Module id="1" title='React' beschreibung={"React biete neue Möglichkeiten um das Programmieren von einer Webapplikation zu vereinfachen!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/react/react-original.svg' rating={5}/>
        
                </div>
                <h2>Die neuesten Kurse:</h2>
                <div className="catalogue__row">
                <Module id="1" title='HTML5' beschreibung={"HTML für Einsteiger um eine Webapplikation zu gestalten!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/html5/html5-original.svg' rating={4}/>
                <Module id="1" title='CSS3' beschreibung={"Lerne heute noch das Designen mit CSS!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/css3/css3-original.svg' rating={5}/>
                <Module id="1" title='React' beschreibung={"React biete neue Möglichkeiten um das Programmieren von einer Webapplikation zu vereinfachen!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/react/react-original.svg' rating={5}/>
              
                </div>
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
