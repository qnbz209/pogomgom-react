import './App.css';
import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import SignupSuccess from './pages/SignupSuccess';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pwd: '',
      name: '',
      phone: '',
      email: ''
    }
    this.setStateWithKey = this.setStateWithKey.bind(this);
  }

  setStateWithKey(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup
                id={this.state.id}
                pwd={this.state.pwd}
                name={this.state.name}
                phone={this.state.phone}
                email={this.state.email}
                changeParentState={this.setStateWithKey} />
            </Route>
            <Route path="/signup-success">
              <SignupSuccess
                id={this.state.id}
                name={this.state.name} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;