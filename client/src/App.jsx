import React from 'react';
import './css/Article.css';
import './css/splash_login.css';
import RegisterContainer from './components/sign-up-container';
import LoginContainer from './components/login-container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './components/articles/articles_call';
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={RegisterContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route path="/articles" component={Articles} />
    </Switch>

  </div>
)

export default App;
