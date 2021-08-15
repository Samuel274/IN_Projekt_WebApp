import './App.css';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Modules from './Pages/Modules/Modules';
import Ranking from './Pages/Ranking/Ranking';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AuthContext} from './Auth/AuthContext';
import { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import QuizApp from './Components/Quiz/QuizApp';
import Profile from './Pages/Profile/Profile';
import Dashboard_Page from './Pages/Dashboard_Page/Dashboard_Page';
import Startseite from './Pages/Dashboard_Page/Dashboard_Components/Startseite';
import Quizerstellen from './Pages/Quiz_erstellen/Quizerstellen';
import Userverwalten from './Pages/User_verwalten/Userverwalten';

function App() {

  const [authState, setAuthState] = useState(
    {
    username: "", 
    id: 0, 
    status: false,
    role: "",
  });


  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      axios.get('http://localhost:3001/users/auth', 
      {headers: {
        accessToken: localStorage.getItem('accessToken'),
      },
    })
    .then((response) => {
        if(response.data.error){
          setAuthState({...authState, status: false}); /*Only change Status */
        } else {
          setAuthState({
            username: response.data.username, 
            id: response.data.id, 
            status: true,
            role: response.data.role,
          });
        };
      });
    };
  }, []);

  return (
    <div className="App">
      {console.log(authState.role)}
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
        

      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
        <Fragment>
          {authState.status ? ( 
            <>
          <Route path="/modules/:id" exact component={Modules} />
          <Route path="/ranking" exact component={Ranking} />
          <Route path="/quiz" exact component={QuizApp} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/dashboard_page" exact component={Dashboard_Page} />
          <Route path="/startseite" exact component={Startseite} />
          <Route path="/modules" exact component={Modules} />
          <Route path="/quizerstellen" exact component={Quizerstellen} />
          <Route path="/userverwalten" exact component={Userverwalten} />
            
        
        
            </>
          ) : ( <Route path="/*" exact component={PageNotFound} />)} 
        

        </Fragment>
      </Switch>


  
      </Router>
      </AuthContext.Provider>
    
      
    </div>
  );
}

export default App;
