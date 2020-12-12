import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Complete from './pages/Complete';

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
    this.handleState = this.handleState.bind(this);
  }

  handleState(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route
            exact path="/"
            component={Home} />
          <Route
            path="/joinform"
            render={()=>
              <Form
                id={this.state.id}
                pwd={this.state.pwd}
                name={this.state.name}
                phone={this.state.phone}
                email={this.state.email}
                handleState={this.handleState}/>}
          />
          <Route
            path="/complete"
            render={()=>
              <Complete
                component={Complete}
                id={this.state.id}
                name={this.state.name} />}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;