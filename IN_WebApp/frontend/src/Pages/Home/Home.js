import React from 'react';
import './home.css';
import { AuthContext} from "../../Auth/AuthContext";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import Module from '../../Components/Module/Module';
import Login from '../Login/Login';
import Startseite from '../Dashboard_Page/Dashboard_Components/Startseite';

function Home() {
 
    const [authState, setAuthState] = useState(
        {
        username: "", 
        id: 0, 
        status: false,
        role: "",
      });

    


    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
          axios.get('http://62.171.138.202:3001/users/auth', 
          {headers: {
            accessToken: localStorage.getItem('accessToken'), /**AccessToken wird im Header mitgeliefert */
          },
        })
        .then((response) => {
            if(response.data.error){
              setAuthState({...authState, status: false}); /*Wechselt den Status zu false */
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
 
      const logout = () => {                    /**Setzt den AuthState des Nutzers zurück und loggt ihn somit aus */
        localStorage.removeItem("accessToken");
        setAuthState({
          username: "", 
          id: 0, 
          status: false});
      }; 
 
 
    return (
        <div className="home__container">
          <div className="grid"> 
            <div className="counter"></div> 
            <div className="content"> <h2>Die beliebtesten Kurse: </h2>
              <div className="home__row">
                {/**Module involvieren über Probs */}
                <Module id="1" title='HTML5' beschreibung={"HTML für Einsteiger um eine Webapplikation zu gestalten!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/html5/html5-original.svg' rating={4}/>
                <Module id="1" title='CSS3' beschreibung={"Lerne heute noch das Designen mit CSS!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/css3/css3-original.svg' rating={5}/>
                <Module id="1" title='React' beschreibung={"React biete neue Möglichkeiten um das Programmieren von einer Webapplikation zu vereinfachen!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/react/react-original.svg' rating={5}/>
              </div>
              <h2>Die neuesten Kurse:</h2>
              <div className="home__row">
              <Module id="1" title='HTML5' beschreibung={"HTML für Einsteiger um eine Webapplikation zu gestalten!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/html5/html5-original.svg' rating={4}/>
              <Module id="1" title='CSS3' beschreibung={"Lerne heute noch das Designen mit CSS!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/css3/css3-original.svg' rating={5}/>
              <Module id="1" title='React' beschreibung={"React biete neue Möglichkeiten um das Programmieren von einer Webapplikation zu vereinfachen!"} image='https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/react/react-original.svg' rating={5}/>
              </div>
            </div>
              
            <div className="footer">Footer / Impressum</div>
        <AuthContext.Provider value={{ authState, setAuthState }}>             
                    {authState.status ? (
                         <>
                         <div className="title">
                         <Link to="/">
                            <img className="home__logo"
                            src="https://pngimg.com/uploads/book/book_PNG51047.png" alt="logo"/>
                          </Link>
                           <div className="title__logout">
                             <Link to={"/startseite/"}> Dashboard </Link>   
                             {authState.status && <button className="home__button" onClick={logout}> Logout</button>} 
                            </div>
                         </div>
                         <div className="bannerLeft">
                          <div className="bannerLeft__container">
                          <h1>IN_PROJEKT</h1>
                          <h2>Hallo {authState.username}!</h2>
                            </div>
                            </div>
                            <div className="bannerRight">
                          <img className="bannerRight__image" alt="backgroundIMG" src="http://pngimg.com/uploads/student/student_PNG62533.png" />
                        </div>


                         </>
                  ) : (
                        /*Logged OUT */
                        <>
                        <div className="title">
                          <Link to="/">
                            <img className="home__logo"
                            src="https://pngimg.com/uploads/book/book_PNG51047.png" alt="logo"/>
                          </Link>
                         
                          <div className="home__search">
                              <input className="home__searchInput" type="text" placeholder="Suchen..." />
                         </div>
                        </div> 
                        <div className="bannerLeft">
                          <div className="bannerLeft__container">
                          <h1>Willkommen beim ...</h1>
                            <p>IN_Projekt von Samuel Stein</p>
                            <div className="banner__buttons">
                            <Link to="/login"> <button className="home__button">Login</button></Link>
                            <Link to="/registration"><button className="home__button" >Registration</button></Link>
                            </div>
                            </div>
                        </div>
                        <div className="bannerRight">
                          <img className="bannerRight__image" alt="backgroundIMG" src="http://pngimg.com/uploads/student/student_PNG62533.png" />
                        </div>
                        
                    </>
              )}
           
            
            
            <Router>
                
          

           <Switch>
           <Route path="/login" exact component={Login} />
           <Route path="/startseite" exact component={Startseite} />
               
            </Switch>     


            </Router>
            
            
            </AuthContext.Provider>
            </div>
            </div>
           
    )
}

export default Home


