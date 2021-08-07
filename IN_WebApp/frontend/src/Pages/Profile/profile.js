import React, {useState} from 'react';
import axios from 'axios';
import Dashboard_Page from '../Dashboard_Page/Dashboard_Page'
import './profile.css'


function Profile() {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const changePassword = () => {
        axios.put("http://localhost:3001/users/changepassword", {
            oldPassword: oldPassword, 
            newPassword: newPassword,
        },
         {
             headers: {
                 accessToken: localStorage.getItem("accessToken"),
             },
         }
        ).then((response) => {
            if (response.data.error){
                alert(response.data.error);
            }
        });
        ;

    }


    return (
        <Dashboard_Page>
        
            <h1>PROFILE</h1>
        <div className="change__password">   
            <h2>Change Password:</h2>
            <label>Old Password: </label>
            <input type="text" placeholder="Old Password..." onChange={(event) => {setOldPassword(event.target.value)}}/>
            <label>New Password</label>
            <input type="text" placeholder="New Password..." onChange={(event) => {setNewPassword(event.target.value)}}/>
            <button type="submit" onClick={changePassword}> Submit</button>


           
        </div>
        
            DARK/WHITE-Mode
            DELETE ACCOUNT
        </Dashboard_Page>
    )
}

export default Profile
