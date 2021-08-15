import React, {useContext} from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import "./quiz.css";

function MainMenu() {

    const {setGameState} = useContext(QuizContext)



    return (
        <div className="Menu">


          <button className="quizButton" onClick={() => {setGameState("quiz")}}>Quiz starten!</button>  {/**Change State to Quiz after pressing the button */}

        </div>
    )
}

export default MainMenu
