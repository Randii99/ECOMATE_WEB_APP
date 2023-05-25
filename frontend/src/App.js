//Import counter class component from src..component
//import CounterClass from './components/counterClass';
//import CounterFunction from './components/counterFunction';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"

import AddElectricity from './components/AddElectricity';
import AllData from './components/AllData';
import EditElectricity from './components/EditElectricity';
import report from './components/report';
import Search from './components/Search';



function App() {
  return (
    
  <Router>
  
   
      
    
    <Route path="/add" exact component={AddElectricity}></Route> 
    <Route path="/all" exact component={AllData}></Route>
   
    <Route path="/report" exact component={report}></Route>
    <Route path="/search" exact component={Search}></Route>
    <Route path="/edit/:id" exact component={EditElectricity}></Route>
   

</Router> 

);
} 

export default App;


