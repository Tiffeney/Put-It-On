import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/universal/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Access/Login';
import Logout from './components/Access/Logout'
import Signup from './components/Access/Signup';
import Profile from './components/Access/Profile';
import httpClient from './utilities/httpClient';
import NotFound from './components/Access/NotFound';
// import Moment from 'react-moment';
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
            <Route path="/profile" component={() => {
              return currentUser ?  <Profile /> : <Redirect to="/login" />
            }} />
            <Route component={NotFound}/>
          
        </Switch>
      </Layout>
    );
  }
}

export default App;
