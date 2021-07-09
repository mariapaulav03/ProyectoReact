import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Index from './Components/index'
  import Adopt from './Components/Adopcion';


function App(){
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Switch>
                <Route exact path="/adop">
                        <Adopt />
                    </Route>
                    <Route exact path="/">
                        <Index />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
