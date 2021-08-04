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

function App() {

  
  let history = useHistory();

  const [authState, setAuthState] = useState(
    {
    username: "", 
    id: 0, 
    status: false,
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
        </Fragment>
      </Switch>


  
      </Router>
      </AuthContext.Provider>
    
      
    </div>
  );
}

export default App;
