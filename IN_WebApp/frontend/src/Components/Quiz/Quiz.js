import React, {useState, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Questions } from '../../Helpers/QuestionBank';
import { QuizContext } from '../../Helpers/Contexts';
import axios from 'axios';

function Quiz() {

    const {score, setScore, setGameState} = useContext(QuizContext); /**Score (richtige Antworten) ändern */

    const [questions, setQuestions] = useState([]);
    const [currQuestion, setCurrQuestion] = useState(0); /**Start with first Question Index 0 */
    const [optionChosen, setOptionChosen] = useState("")

    

//    const {id} = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:3001/quizzes/info/1`)
        .then((response) =>{
            setQuestions(response.data);
            console.log(response.data);
    });
}, []);




    const nextQuestion = () => {
        if ([currQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if ([currQuestion].answer == optionChosen) {
            setScore(score + 1); //* Increase Score if Final question was right
        }
        setGameState("endScreen")
    }

    return (
        <div className="Quiz">
            {console.log(questions[currQuestion])};

            {questions[0].answer}


            {console.log([currQuestion].question)}
            <h1>{[currQuestion].question}</h1> {/**Shows the Question */}
            <div className="options">
                <button className="quizButton" onClick={() => setOptionChosen("A")}>{[currQuestion].optionA} </button>
                <button className="quizButton" onClick={() => setOptionChosen("B")}>{[currQuestion].optionB} </button>
                <button className="quizButton" onClick={() => setOptionChosen("C")}>{[currQuestion].optionC} </button>
                <button className="quizButton" onClick={() => setOptionChosen("D")}>{[currQuestion].optionD} </button>
            </div>

            {currQuestion == 5 - 1 ? (
                <button onClick={finishQuiz}> Finish Quiz </button>
            ) : (
                <button id="nextQuestion" onClick={nextQuestion}> Next Question </button>
            )}
                
        </div>
    )
}

export default Quiz
