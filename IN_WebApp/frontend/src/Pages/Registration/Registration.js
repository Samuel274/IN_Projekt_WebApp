import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
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
        axios.post("http://localhost:3001/users/registration", data).then(() => {
            console.log(data);
        })

    };

    const validationSchema =  Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    });

    const backToLogin = () => {
        history.push("/login");
    }


    return (
        <div className="registration__center">
            <h1>Registration</h1>
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
                    <button type="submit"> Register </button>
                    
                </Form>
            </Formik>
        </div>
        </div>
       
    )
}

export default Registration
