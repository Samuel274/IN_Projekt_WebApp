import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory, useParams, Link} from 'react-router-dom';
import axios from 'axios';
import './dashboard.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AuthContext} from "../../Auth/AuthContext";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Modules from '../Modules/Modules';
import Catalogue from '../Catalogue/Catalogue';



function Dashboard() {

    let {id} = useParams();
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [score, setScore] = useState("");
    const [role, setRole] = useState("");

    const [authState, setAuthState] = useState(
        {
        username: "", 
        id: 0, 
        status: false,
      });

    useEffect(() => {
        if (!localStorage.getItem("accessToken")){
            history.push("/login");
        } 
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:3001/users/basicinfo/${id}`)
        .then((response) =>{
            setUsername(response.data.username);
            setScore(response.data.score);
            setRole(response.data.role);
        });
    }, []);

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({
          username: "", 
          id: 0, 
          status: false});
      }; 



    return (
        
        <div className="dashboard">
           <div className="grid__dashboard"> 
                <div className="title">
                    <img className="title__logo"
                    src="https://pngimg.com/uploads/book/book_PNG51047.png" alt="logo"/>
                    <div className="title__font">E-Learning</div>
                    <div className="username">{username}
                        </div>
                   <div className="title__accountIcon">
                        <AccountCircleIcon />
                       </div> 
                </div>
                    
                <div className="header">
                    <div className="header__title">
                        Dashboard
                    </div>
                </div>
                <div className="sidebar">
                    <div className="username">
                        {username}
                    </div>
                    <Sidebar />
                </div> 
                <div className="content_">
                    <div className="dashboard__data">
                        <h1>Dashboard</h1>
                        <h2>Username: {username}</h2>
                        <h2>Score: {score}</h2>
                        <h2>Role: {role}</h2>
                    </div>
                    <h1>Stats (Erledigte Module/Aufgaben)</h1>
                    <h1>Achievements</h1>
                </div>
                <div className="footer_">Footer / Impressum</div>
            </div>
        </div>

        


    )
}

export default Dashboard
