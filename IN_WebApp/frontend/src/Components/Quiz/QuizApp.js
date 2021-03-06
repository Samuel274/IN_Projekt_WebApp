import React, {useState, useContext} from 'react';
import EndScreen from './EndScreen';
import MainMenu from './MainMenu';
import Quiz from './Quiz';
import { QuizContext } from '../../Helpers/Contexts';


function QuizApp() {

    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0)
    const [counter, setCounter] = useState(0)

    return (
        <div className="QuizApp">
            <h1>Quiz zum Modul</h1>
            <QuizContext.Provider value={{gameState, setGameState, score, setScore, counter, setCounter}}>  {/**Je nach gameState wird eines der Componenten gerendert */}
                {gameState === "menu" && <MainMenu />}
                {gameState === "quiz" && <Quiz />}
                {gameState === "endScreen" && <EndScreen />}
            </QuizContext.Provider>
                
            
        </div>
    )
}

export default QuizApp
