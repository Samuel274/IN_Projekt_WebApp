import React, { useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

function Dashboard() {

    let {id} = useParams();
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [score, setScore] = useState("");
    const [permission, setPermission] = useState("");

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
            setPermission(response.data.score);
        });
    }, []);



    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Username: {username}</h2>
            <h2>Score: {score}</h2>
            <h2>Persmission: {permission}</h2>
        </div>
    )
}

export default Dashboard
