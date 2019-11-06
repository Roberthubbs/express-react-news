import React from 'react';
import './css/Article.css';
import './css/splash_login.css';
import './css/app.css';
import './css/weather.css';
import './css/stocks.css';
import './css/comment.css';
import './css/reset.css';
import './css/article_widgets.css';
import './css/feed.css';
// import { connect } from 'react-redux';
// import Sidebar from "react-sidebar";
import { LinksMenu } from './components/articles/links/links.jsx';
import RegisterContainer from './components/sign-up-container';
import SportsArticles from './components/articles/sports_api';
import LoginContainer from './components/login-container';
// import img from './images/newPaper.png';
import { AuthRoute } from './util/route_util';
// import BlankForTesting from './components/blank_for_testing';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Articles from './components/articles/articles_all_container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import HelloContainer from './components/hello/hello_container';
import WeatherCurrent from './components/widgets/weather_current';
// import NPRArticles from './components/articles/liberalArticles/npr';
import ConservativeArticles from './components/articles/conservativeArticles/conservative_container'
import LiberalArticles from './components/articles/liberalNews/liberal_container'
import LiberalArticlesElection from './components/articles/liberalNews/liberal_election_con'
import LiberalArticlesWorld from './components/articles/liberalNews/liberal_world_con'
import LiberalArticlesBusiness from './components/articles/liberalNews/liberal_business_con'
import ConservativeArticlesElection from './components/articles/conservativeArticles/conservative_elections_con';
import ConservativeArticlesWorld from './components/articles/conservativeArticles/conservative_world_con';
import ConservativeArticlesBusiness from './components/articles/conservativeArticles/conservative_business_con';
import UserPage from './components/user_info_container';
import ArticleShow from './components/articles/article_show_container';
import Stocks from './components/widgets/stocks';
import CategoryArticles from './components/articles/categories/category_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
// import CategoryNav from './components/articles/categories/category_nav';
import ActivityFeed from './components/user/activity_container';
// import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
// const mapStateToProps = (state) => {
//   if (state){
//   return {
//     cookies: state.entities.users.authToken.token
//   };
//   }
// };
const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "16px",
  paddingRight: "10px"
}
console.log("%crobertfhubert@gmail.com, 912-358-7586, https://roberthubbs.github.io/Portfolio", "color:blue; font-size:x-large")

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showMenu: false
    }
    this.handleMenuOpen = this.handleMenuOpen.bind(this)
  }
  handleMenuOpen(e){
    e.preventDefault();
    if (!this.state.showMenu){
      this.setState({
        showMenu: true
      })
    } else {
      this.setState({showMenu: false})
    }
  }
  
  render(){
    return(
    <div>
        <div className="right-head">
          
          <div className="left-side-head">
            {/* <img src={img} alt="icon" /> */}
            <div className="middle-head-links">
              <Link to="/liberal">Liberal</Link>
              <Link to="/all">All News</Link>
              <Link to="/conservative">Conservative</Link>
            </div>
          </div>
          <HelloContainer />

        </div>
            {this.state.showMenu ? <LinksMenu /> : null}
      <div className="newsy-header">
        
        <div className="middle-head">
            <div className="top-emblem-div">
              <FontAwesomeIcon icon={faNewspaper} size={"4x"} color={"white"}/>
            </div>
            <div className="emblem">
              <h3 className="newsy-title">Newsy</h3>
              <h5 className="newsy-subheader">Your News, Your Way</h5>
          </div>
            
            {/* <div className="middle-head-links">
              <Link to="/liberal">Liberal</Link>
              <Link to="/all">All News</Link>
              <Link to="/conservative">Conservative</Link>
            </div> */}
        </div>
        
          {/* <div className="category-nav"> */}
            {/* <Link style={linkStyle} to="/categories/politics">Politics</Link>
            <Link style={linkStyle} to="/categories/technology">Technology</Link>
            <Link style={linkStyle} to="/categories/business">Business</Link>
            <Link style={linkStyle} to="/categories/entertainment">Entertainment</Link>
            <Link style={linkStyle} to="/categories/health">Health</Link>
            <Link style={linkStyle} to="/categories/science">Science</Link> */}
            {/* <div className="category-sub-div"><FontAwesomeIcon icon={faLandmark} /><Link style={linkStyle} to="/categories/politics">Politics</Link></div>
            <div className="category-sub-div"><FontAwesomeIcon icon={faMobileAlt} /><Link style={linkStyle} to="/categories/technology">Technology</Link></div>
            <div className="category-sub-div"><FontAwesomeIcon icon={faBriefcase} /><Link style={linkStyle} to="/categories/business">Business</Link></div>
            <div className="category-sub-div"><FontAwesomeIcon icon={faTheaterMasks} /><Link style={linkStyle} to="/categories/entertainment">Entertainment</Link></div>
            <div className="category-sub-div"><FontAwesomeIcon icon={faCapsules} /><Link style={linkStyle} to="/categories/health">Health</Link></div>
            <div className="category-sub-div"><FontAwesomeIcon icon={faMicroscope} /><Link style={linkStyle} to="/categories/science">Science</Link></div> */}
          {/* </div> */}

        {/* <Link to="/sports">Sports</Link> */}
      </div>
      <Switch>
        <AuthRoute exact path="/register" component={RegisterContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <Route path="/all" component={Articles} />
        <Route path="/feed" component={ActivityFeed} />
        <Route exact path="/" component={Articles} />
        <Route path="/categories/:category" component={CategoryArticles} />
        <Route exact path="/sports" component={SportsArticles} />
        <Route exact path="/user/:userId" component={UserPage} />
        <Route path="/weather" component={WeatherCurrent} />
       <Route path="/show/:id" component={ArticleShow} />
        <Route path="/conservative" component={ConservativeArticles} />
        <Route path="/liberal" component={LiberalArticles} />
        <Route path="/liberal/election" component={LiberalArticlesElection} />
        <Route path="/liberal/business" component={LiberalArticlesBusiness} />
        <Route path="/liberal/world" component={LiberalArticlesWorld} />
        <Route path="/conservative/election" component={ConservativeArticlesElection} />
        <Route path="/conservative/business" component={ConservativeArticlesBusiness} />
        <Route path="/conservative/world" component={ConservativeArticlesWorld} />
        <Route path="/stocks" component={Stocks} />
      </Switch>
        
    </div>
    )
  }
}

// export default connect(mapStateToProps, null)(App);
export default App;
