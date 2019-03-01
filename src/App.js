import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from './routes'
import { withRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
      {routes}
      <Nav location={this.props.location}/>
      </div>
    );
  }
}

export default withRouter(App);
