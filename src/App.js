import React from 'react';
import './App.css';
import Header from './pages/Header';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Menu from './Components/Menu';
import Calc from './Components/Calc';

function App() {
  return (
    
    <div className="App">
      <Router>
        <div className='header'>
         <Header/>
        </div>

  
        <main>
        
        
          <Switch>
            <Route path="/calc" component={Calc}>
             {/* Calc page */}
             
            </Route>
            <Route path="/menu" component={Menu}>
              {/* Menu page */}

            </Route>

          </Switch>
        
        </main>
      </Router>
      
     </div>


  );
}

export default App;
