import React from 'react';
import './home.css';
import { AuthContext} from "../../Auth/AuthContext";
import {BrowserRouter as Router, Route, Switch, Link, useHistory} from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import PageNotFound from '../PageNotFound/PageNotFound';
import Catalogue from '../Catalogue/Catalogue';
import Modules from '../Modules/Modules';

function Home() {
 
    const [authState, setAuthState] = useState(
        {
        username: "", 
        id: 0, 
        status: false,
      });

    const [id, setId] = useState();


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
              });
              setId(response.data.id);
            };
          });
        };
      }, []);  
 
      const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({
          username: "", 
          id: 0, 
          status: false});
      }; 
 
 
    return (
        <div className="home__container">
          <div className="grid"> 
            <div className="counter">Counter</div> 
            <div className="content">Content</div>
            <div className="footer">Footer / Impressum</div>
        <AuthContext.Provider value={{ authState, setAuthState }}>             
                    {authState.status ? (
                         <>
                         <div className="title">
                           LOGO
                           <div className="title__logout">
                             <Link to="/catalogue"> Katalog </Link>
                             <Link to={`/dashboard/${id}`}> Dashboard </Link>  
                             {authState.username} 
                             {authState.status && <button className="home__button" onClick={logout}> Logout</button>} 
                            </div>
                         </div>
                         <div className="bannerLeft"></div>

                         </>
                  ) : (
                        /*Logged OUT */
                        <>
                        <div className="title">
                          <Link to="/">
                            <img className="home__logo"
                            src="https://pngimg.com/uploads/book/book_PNG51047.png" alt="logo"/>
                          </Link>
                          <div className="home__dropdown">
                            Kategorien
                          </div>
                          <div className="home__search">
                              <input className="home__searchInput" type="text" placeholder="Suchen..." />
                         </div>
                        </div> 
                        <div className="bannerLeft">
                          <div className="bannerLeft__container">
                          <h1>Willkommen bei ...</h1>
                            <p>iuashdiuhasiduhasduoihasiodjoaisjd</p>
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
           <Route path="/dashboard/:id" exact component={Dashboard} />
               
            </Switch>     


            </Router>
            
            
            </AuthContext.Provider>
            </div>
            </div>
           
    )
}

export default Home


