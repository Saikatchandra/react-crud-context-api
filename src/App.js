import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
 
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div style= {{maxWidth:"30rem", margin:"4rem auto"}} >
     <Router>
       
     <Switch>
        <Route exact path="/" component= {Home} />
       <Route path="/add" component= {AddUser} />
       <Route path="/edit/:id" component= {EditUser} />
     </Switch>
     
    </Router> 
    </div>
  );
}

export default App;
