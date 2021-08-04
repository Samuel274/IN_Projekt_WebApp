import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { AuthContext} from "../../Auth/AuthContext";

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
        <div>
            Ranking:

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

        
        </div>
    )
}

export default Ranking
