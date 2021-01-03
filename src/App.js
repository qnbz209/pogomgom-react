import './App.css';
import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignupContainer from './containers/SignupContainer';
import SuccessConatiner from './containers/SuccessContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <SignupContainer />
            </Route>
            <Route path="/success">
              <SuccessConatiner />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;