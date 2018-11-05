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
import axios from 'axios';

// import Moment from 'react-moment';
import './App.css';

class App extends Component {
  state = { currentUser: httpClient.getCurrentUser() };

  onAuthSuccess = () => {
    if (this.state.currentUser) {
      let response = axios.get(`/api/users/${this.state.currentUser._id}`)
      response.then((res) => {
        this.setState({ currentUser: res.data.payload })
      })
    } else {
      this.setState({ currentUser: httpClient.getCurrentUser() })
    }
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
          <Route exact path="/" component={() => {
              return currentUser ?  <Home /> : <Redirect to="/login" />
            }} />
            <Route path="/login" render={(props) => {
                return <Login {...props} onLoginSuccess={onAuthSuccess}/>
            }}/>
            <Route path="/logout" render={() => {
                return <Logout onLogout={onLogout} />
            }} />
            <Route path="/signup" render={(props) => {
              return <Signup {...props} onSignupSuccess={onAuthSuccess}/>
            }}/>

            <Route path="/profile" render={props => currentUser ? <Profile {...props} onUpdateSuccess={onAuthSuccess} currentUser={currentUser}/> : <Redirect to="/login"/>}/>
            <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
