import axios from 'axios'
import React from 'react'
import Dashboard_Page from '../Dashboard_Page/Dashboard_Page'
import {Formik, Form, Field} from 'formik';
import './userverwalten.css'


function Userverwalten() {

    const initialValues = {
        username: "",
        role: "",
    };

    const changeRole = (data) => {
        console.log(data);
        axios.put("http://62.171.138.202:3001/users/changerole", data).then(() => {
            console.log(data);
            window.alert("Nutzer Rolle geändert!");
        });

        };
    

    const deleteUser = (username) => {
        console.log(username);
        axios.delete(`http://62.171.138.202:3001/users/delete/${username.username}`,).then(() => {
            console.log(username);
            window.alert("Nutzer gelöscht!");
    });

};

    return (
        <Dashboard_Page>
            <div className="delete___user">
            <Formik initialValues={initialValues} onSubmit={deleteUser}>
                <Form>
                    <div className="txt_field_quiz">
                        <label>Username: </label>
                        <Field className="inputData" name="username" placeholder="Benutzername" />
                        </div>
                    <button className="quiz__button" type="submit"> Nutzer löschen </button>  
                </Form>
            </Formik>
            </div>
            <div className="administer__user">

            <Formik initialValues={initialValues} onSubmit={changeRole}>
                <Form>
                    <div className="txt_field_quiz">
                        <label>Username: </label>
                        <Field className="inputData" name="username" placeholder="Benutzername" />
                        </div>
                        <div className="txt_field_quiz">    
                        <label>Berechtigung: </label>
                        <Field className="inputData" name="role" placeholder="Student, Lehrer oder Admin" />
                        </div>
                    <button className="quiz__button" type="submit"> Berechtigung wechseln </button>  
                </Form>
            </Formik>
            </div>
        </Dashboard_Page>
    )
}

export default Userverwalten
