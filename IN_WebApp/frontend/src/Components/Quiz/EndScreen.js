import React, {useContext} from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import "./quiz.css";

function EndScreen() {

    const {score, setScore, counter, setCounter, setGameState} = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setCounter(0);
        setGameState("menu");
    }

    return (
        <div className="EndScreen">
            <h1>Quiz beendet!</h1>
            <h3> Du hast {score} von {counter} Fragen <br /> richtig beantwortet!</h3>
            <button className="nextQuestion" onClick={restartQuiz}> Restart Quiz </button>
        </div>
    )
}

export default EndScreen
