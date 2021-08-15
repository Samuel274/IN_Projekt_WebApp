import React from 'react'
import Dashboard_Page from '../Dashboard_Page/Dashboard_Page'
import './quizerstellen.css'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from 'axios';

function Quizerstellen() {

    const initialValues = {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
        score: "",
        ModuleId: 1,
    };

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/quizzes/quizcreate", data).then(() => {
            console.log(data);
        })
        console.log(data);
    }

    return (
        <Dashboard_Page>
            <div className="quiz__erstellen">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    <Form>
                        <div className="txt_field_quiz">
                        <label>ModuleId: </label>
                        <Field className="inputData" name="ModuleId" placeholder="ModuleId" />
                        </div>
                        <div className="txt_field_quiz">
                        <label>Frage: </label>
                        <Field className="inputData" name="question" placeholder="question" />
                        </div>
                        <div className="txt_field_quiz">
                        <label>OptionA: </label>
                        <Field className="inputData" name="optionA" placeholder="optionA" />
                        </div>
                        <div className="txt_field_quiz">
                        <label>OptionB: </label>
                        <Field className="inputData" name="optionB" placeholder="optionB" />
                        </div>
                        <div className="txt_field_quiz">
                        <label>OptionC: </label>
                        <Field className="inputData" name="optionC" placeholder="optionC" />
                        </div>
                        <div className="txt_field_quiz">
                        <label>OptionD: </label>
                        <Field className="inputData" name="optionD" placeholder="optionD" />
                        </div>
                        <div className="txt_field_quiz">
                        <label>Antwort: </label>
                        <Field className="inputData" name="answer" placeholder="Buchstabe (A,B,C oder D)" />
                        </div>
                        <div className="txt_field_quiz">
                        <label>Punkte: </label>
                        <Field className="inputData" name="score" placeholder="score" />
                        </div>   
                        <button className="quiz__button" type="submit"> Quiz erstellen </button>               
                    </Form>
                </Formik>
                </div>            
        </Dashboard_Page>
    )
}

export default Quizerstellen
