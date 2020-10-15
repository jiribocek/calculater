import React from 'react';
import './App.css';
import Header from './pages/Header';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Menu from './Components/Menu';
import Calc from './Components/Calc';

function App() {
  return (
    
    <div className="App">
      <div className='header'>
        <Header/>
      </div>

  
      <main>
        <Router>
        
          <Switch>
            <Route path="/calc" component={Calc}>
             {/* Calc page */}
             
            </Route>
            <Route path="/menu" component={Menu}>
              {/* Menu page */}

            </Route>

          </Switch>
        </Router>
      </main>
      
      
     </div>


  );
}

export default App;
