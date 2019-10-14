import React from 'react';
import './css/Article.css';
import './css/splash_login.css';
import './css/app.css';
import './css/weather.css';
import './css/stocks.css';
import { connect } from 'react-redux';
import RegisterContainer from './components/sign-up-container';
import SportsArticles from './components/articles/sports_api';
import LoginContainer from './components/login-container';
import img from './images/newPaper.png';
import { AuthRoute } from './util/route_util';
import BlankForTesting from './components/blank_for_testing';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Articles from './components/articles/articles_all_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import HelloContainer from './components/hello/hello_container';
import WeatherCurrent from './components/widgets/weather_current';
// import NPRArticles from './components/articles/liberalArticles/npr';
import ConservativeArticles from './components/articles/conservativeArticles/conservative_container'
import LiberalArticles from './components/articles/liberalNews/liberal_container'
import ArticleShow from './components/articles/article_show_container';
import Stocks from './components/widgets/stocks';

// const mapStateToProps = (state) => {
//   if (state){
//   return {
//     cookies: state.entities.users.authToken.token
//   };
//   }
// };

class App extends React.Component {
  
  render(){
    return(
    <div>
      
      <div className="newsy-header">
        <div className="left-side-head">
          <img src={img} alt="icon" />
          
        </div>
        <div className="middle-head">
            <div className="emblem">
              <h3 className="newsy-title">Newsy</h3>
              <h5 className="newsy-subheader">Your News, Your Way</h5>
            </div>
            <div className="middle-head-links">
              <Link to="/liberal">Liberal</Link>
              <Link to="/all">All News</Link>
              <Link to="/conservative">Conservative</Link>
            </div>
        </div>
        <div className="right-head">
            <HelloContainer />
        </div>
        {/* <Link to="/sports">Sports</Link> */}
      </div>
      <Switch>
        <AuthRoute exact path="/register" component={RegisterContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <Route path="/all" component={Articles} />
        <Route exact path="/sports" component={SportsArticles} />
        <Route exact path="/testing" component={BlankForTesting} />
        <Route path="/weather" component={WeatherCurrent} />
       <Route path="/show/:id" component={ArticleShow} />
        <Route path="/conservative" component={ConservativeArticles} />
        <Route path="/liberal" component={LiberalArticles} />
        <Route path="/stocks" component={Stocks} />
      </Switch>

    </div>
    )
  }
}

// export default connect(mapStateToProps, null)(App);
export default App;
