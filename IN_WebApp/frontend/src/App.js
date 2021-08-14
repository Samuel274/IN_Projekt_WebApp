import './App.css';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Catalogue from './Pages/Catalogue/Catalogue';
import Modules from './Pages/Modules/Modules';
import Ranking from './Pages/Ranking/Ranking';
import {BrowserRouter as Router, Route, Switch, Link, useHistory} from 'react-router-dom';
import {AuthContext} from './Auth/AuthContext';
import { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header'
import QuizApp from './Components/Quiz/QuizApp';
import Quiz from './Components/Quiz/Quiz';
import Profile from './Pages/Profile/Profile';
import Dashboard_Page from './Pages/Dashboard_Page/Dashboard_Page';
import Startseite from './Pages/Dashboard_Page/Dashboard_Components/Startseite';
import Quizerstellen from './Pages/Quiz_erstellen/Quizerstellen';
import Userverwalten from './Pages/User_verwalten/Userverwalten';

function App() {

  
  let history = useHistory();

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

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      username: "", 
      id: 0, 
      status: false});
  };

  return (
    <div className="App">
      {console.log(authState.role)}
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
        

      <Switch>
        <Route path="/" exact component={Home} /> {/**Exclude Sidebar from Header */}
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
        <Fragment>
          {authState.status ? ( 
            <>
        
        
        
        
            </>
          ) : ( console.log("hallo"))} 
        
        <Route path="/dashboard/:id" exact component={Dashboard} />
        <Route path="/catalogue/" exact component={Catalogue} />
        <Route path="/modules/:id" exact component={Modules} />
        <Route path="/ranking" exact component={Ranking} />
        <Route path="/quiz" exact component={QuizApp} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/sidebar" exact component={Sidebar} />
        <Route path="/dashboard_page" exact component={Dashboard_Page} />
        <Route path="/startseite" exact component={Startseite} />
        <Route path="/modules" exact component={Modules} />
        <Route path="/quizerstellen" exact component={Quizerstellen} />
        <Route path="/userverwalten" exact component={Userverwalten} />

        </Fragment>
      </Switch>


  
      </Router>
      </AuthContext.Provider>
    
      
    </div>
  );
}

export default App;
