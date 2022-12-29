
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'

import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import {fetchAllQuestions} from './actions/question'
import {useDispatch, useSelector} from 'react-redux'
 import {fetchAllUsers} from './actions/users'

function App() {
  

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
    
  },[dispatch])

  

  
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <AllRoutes/>
     
    
      </Router>      
    </div>
  );
}

export default App;
