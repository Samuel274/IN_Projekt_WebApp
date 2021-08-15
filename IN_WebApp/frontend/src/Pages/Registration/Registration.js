import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import './registration.css';
import {useHistory} from 'react-router-dom';
function Registration() {

    let history = useHistory();

    const initialValues = {
        username: "",
        password: "",
    };

    const onSubmit = (data) => {
        axios.post("http://62.171.138.202:3001/users/registration", data).then(() => {
            console.log(data);
        })
        history.push("/login");
    };

    const validationSchema =  Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    });

    return (
        <div className="registration__center">
            <div className="registration__top">
            <Link to="/">
                            <img className="home__logo"
                            src="https://pngimg.com/uploads/book/book_PNG51047.png" alt="logo"/>
                          </Link>
            <h1>Registration</h1>
            </div>
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <div className="txt_field_reg">
                    <Field 
                    className="inputData" 
                    name="username" 
                    placeholder="wählen Sie einen Benutzernamen"
                    />
                    <ErrorMessage name="username" component="span" /> 
                    <span></span>
                    <label>Username: </label>
                    </div>

                    <div className="txt_field_reg">
                    <Field 
                    className="inputData" 
                    type="password"
                    name="password"
                    placeholder="Bitte fügen Sie ihr Passwort hinzu" 
                    />
                    <span></span>
                    <label>Password: </label>
                    <ErrorMessage name="password" component="span" /> 
                    </div>
                    <button className="register__button" type="submit"> Registrieren </button>
                    
                </Form>
            </Formik>
        </div>
        </div>
       
    )
}

export default Registration
