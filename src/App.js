import Login from './components/login';
import Signup from './components/signUp'
import Home from './components/home';
import Message from './components/message';
import Explore from './components/explore';
import Profile from './components/profile'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import {useState} from 'react'
import  Modal  from 'react-modal';
import { UserContext } from './components/UserContext';

Modal.setAppElement('#root')

function App() {
const [value,setValue]= useState ('hello from context')
let [fullname,setfullname]=useState('')
let [username,setusername]=useState('')
let [number,setnumber]=useState('')
let [password,setpassword]=useState('')


  return (
    <div className="App">
      <Router>
  
      <Switch>
        <UserContext.Provider value={{value,setValue,fullname,setfullname,username,setusername,number,setnumber,password,setpassword}}>
      <Route exact path='/'>
        <Login/>
        </Route>
        <Route exact path='/signup'>
        <Signup/>
        </Route>
        <Route exact path='/home'>
        <Home/>
        </Route>
      <Route exact path='/message'>
        <Message/>
      </Route>
      <Route exact path='/explore'>
        <Explore/>
      </Route>
      <Route exact path='/profile'>
        <Profile/>
      </Route>
      </UserContext.Provider>
      </Switch>
   
      </Router>
   
    </div>
  );
}

export default App;
