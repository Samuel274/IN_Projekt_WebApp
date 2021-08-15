import React, {useState, useContext, useEffect} from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import axios from 'axios';

function Quiz() {

    const {score, setScore, setCounter, setGameState} = useContext(QuizContext); //Score (richtige Antworten) 

    const [questions, setQuestions] = useState([]);
    const [currQuestion, setCurrQuestion] = useState(0); //Mit der ersten Frage starten
    const [optionChosen, setOptionChosen] = useState(""); //Hier wird die gewählte Option vom User gespeichert    

    useEffect(() => {
        axios.get(`http://62.171.138.202:3001/quizzes/info/1`) // Info 1 gibt alle Fragen des Themas 1 aus 
        .then((response) =>{
            setQuestions(response.data); 
            console.log(response.data)
    });
}, []);

    const nextQuestion = () => {
        if (questions[currQuestion]?.answer === optionChosen) {
            setScore(score + 1);
        }

    setCurrQuestion(currQuestion + 1); // Greift auf nächste Frage im Questions-Array zu
    };

    const finishQuiz = () => {
        if (questions[currQuestion]?.answer === optionChosen) {
            setScore(score + 1); // Erhöht den Score der richtigen Fragen
        }
        setGameState("endScreen") // Wechselt zu EndScreen.js 
    }

    return (
        <div className="Quiz">

            {/**Auswahl der Antworten */}
            <h1>{questions[currQuestion]?.question}</h1> 
            <div className="options">
                <button className="quizButton" onClick={() => setOptionChosen("A")}>{questions[currQuestion]?.optionA} </button>
                <button className="quizButton" onClick={() => setOptionChosen("B")}>{questions[currQuestion]?.optionB} </button>
                <button className="quizButton" onClick={() => setOptionChosen("C")}>{questions[currQuestion]?.optionC} </button>
                <button className="quizButton" onClick={() => setOptionChosen("D")}>{questions[currQuestion]?.optionD} </button>
            </div>
            {setCounter(questions.length)}
            {currQuestion === questions.length - 1 ? (
                <button className="nextQuestion"onClick={finishQuiz}> Quiz beenden </button>
            ) : (
                <button className="nextQuestion" onClick={nextQuestion}> Nächste Frage </button>
            )}
                
        </div>
    )
}

export default Quiz
