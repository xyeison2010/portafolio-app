import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";
import Home from './containers/Home/Home';

import NotFound from './containers/NotFound/NotFound';


class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
         
            <Switch>
              <Route exact path="/" component={Home} />
            
              <Route component={NotFound} /> 
            </Switch>
        
        </BrowserRouter>
      </>
    );
  }
}//falta jugar torneo hacer
//ese  component={NotFound} significa cuando nos dirigimos a un url no descrita
export default App;
