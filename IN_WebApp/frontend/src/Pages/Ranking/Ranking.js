import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './ranking.css';
import Dashboard_Page from '../Dashboard_Page/Dashboard_Page'

function Ranking() {

    const [listOfRanking, setListOfRanking] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3001/users/ranking", { headers: { accessToken: localStorage.getItem("accessToken")},
        })
        .then((response) => {
            setListOfRanking(response.data);
        })
    }, []);



    return (
        <Dashboard_Page>
        <div className="ranking">
        <div className="ranking__content">
            <h1>Ranking:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{listOfRanking[0]?.username}</td>
                        <td>{listOfRanking[0]?.score}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{listOfRanking[1]?.username}</td>
                        <td>{listOfRanking[1]?.score}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{listOfRanking[2]?.username}</td>
                        <td>{listOfRanking[2]?.score}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{listOfRanking[3]?.username}</td>
                        <td>{listOfRanking[3]?.score}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{listOfRanking[4]?.username}</td>
                        <td>{listOfRanking[4]?.score}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{listOfRanking[5]?.username}</td>
                        <td>{listOfRanking[5]?.score}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{listOfRanking[6]?.username}</td>
                        <td>{listOfRanking[6]?.score}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>{listOfRanking[7]?.username}</td>
                        <td>{listOfRanking[7]?.score}</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>{listOfRanking[8]?.username}</td>
                        <td>{listOfRanking[8]?.score}</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>{listOfRanking[9]?.username}</td>
                        <td>{listOfRanking[9]?.score}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="your__ranking">
                <h1>Your Ranking:</h1>
            </div>
{/**            
                <h1>
                Ranking:
                </h1>

            {console.log(listOfRanking)}

            {listOfRanking.map((value, key) => {
                return ( <div key={key} className="ranking">
                    <div className="username">
                        {value.username}
                    </div>
                    <div className="score">
                        {value.score}
                    </div>



                </div>  )
            })}
            */} 
            
         
        </div>
        </Dashboard_Page>
    )
}

export default Ranking
