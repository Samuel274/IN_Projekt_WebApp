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
        <div className="registration">
            LOGO
        
        <div className="registration__container">
            <h1>Registration</h1>
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" /> 
                    <Field 
                    id="inputCreatePost" 
                    name="username" 
                    placeholder="(Ex. John123 ...)" 
                    />

                    <label>Password: </label>
                    <ErrorMessage name="password" component="span" /> 
                    <Field 
                    id="inputCreatePost" 
                    type="password"
                    name="password" 
                    placeholder="(Your Password...)" 
                    />


                    <button type="submit"> Register </button>
                    
                </Form>
            </Formik>
        </div>
        </div>
         </div>
    )
}

export default Registration
