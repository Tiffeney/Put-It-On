import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/universal/Layout/Layout';
import Home from './components/Access/Home';
import Login from './components/Access/Login';
import Logout from './components/Access/Logout'
import Signup from './components/Access/Signup';
import VIP from './components/Access/VIP';
import httpClient from './utilities/httpClient';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { currentUser: httpClient.getCurrentUser() };

  onAuthSuccess = () => {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  onLogout = () => {
    httpClient.Logout();
    this.setState({ currentUser: null });
  }

  render() {
    let { currentUser } = this.state;
    let { onAuthSuccess, onLogout } = this;
    return (
      <Layout currentUser={currentUser}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" render={(props) => {
                return <Login {...props} onLoginSuccess={onAuthSuccess}/>
            }}/>
            <Route path="/logout" render={() => {
                return <Logout onLogout={onLogout} />
            }} />
            <Route path="/signup" render={(props) => {
              return <Signup {...props} onSignupSuccess={onAuthSuccess}/>
            }}/>
            <Route path="/vip" component={() => {
              return currentUser ?  <VIP /> : <Redirect to="/login" />
            }} />
          
        </Switch>
      </Layout>
    );
  }
}

export default App;
