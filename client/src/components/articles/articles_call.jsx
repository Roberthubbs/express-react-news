import React from 'react'
import Article from './article_item';
import WeatherCurrent from '../widgets/weather_current';
// import Stocks from '../widgets/stocks'
import { LinksMenu } from './links/links';
import { Link } from 'react-router-dom';
import HappyArticles from './articleWidgets/sports_container';
import ClipLoader from 'react-spinners/ClipLoader';
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faMobileAlt, faBriefcase, faTheaterMasks, faCapsules, faMicroscope } from '@fortawesome/free-solid-svg-icons';
const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    paddingRight: "10px",
    paddingTop: "10px"
}
class Articles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
           
        };
    }

    async componentDidMount(){
        
        await this.props.receiveAllArticles()
        if (this.props.articles){
            
            this.setState({isLoaded: true})
        }
       
    }
    render() {
        let { isLoaded } = this.state;
      
         if (!isLoaded){
             return (
             <div>
                 <ClipLoader


                 size={150}
                 color={'#123abc'}
                 loading={this.state.loading}
                /></div>
            )
        } else {
            return (
                <div>
                    
                    <WeatherCurrent />
                    <div className="twitter-embed">
                    <TwitterTimelineEmbed
                        sourceType="list"
                        ownerScreenName="palafo"
                        slug="breakingnews"
                        options={{ height: 400 }}
                    />
                    </div>
                    <LinksMenu />
                    <HappyArticles />
                    <div className="category-nav">
                        <div className="category-sub-div"><FontAwesomeIcon className="font-icon-all" icon={faLandmark} size={"2x"}/><Link style={linkStyle} to="/categories/politics">Politics</Link></div>
                        <div className="category-sub-div"><FontAwesomeIcon className="font-icon-all" icon={faMobileAlt} size={"2x"} /><Link style={linkStyle} to="/categories/technology">Technology</Link></div>
                        <div className="category-sub-div"><FontAwesomeIcon className="font-icon-all" icon={faBriefcase} size={"2x"} /><Link style={linkStyle} to="/categories/business">Business</Link></div>
                        <div className="category-sub-div"><FontAwesomeIcon className="font-icon-all" icon={faTheaterMasks} size={"2x"} /><Link style={linkStyle} to="/categories/entertainment">Entertainment</Link></div>
                        <div className="category-sub-div"><FontAwesomeIcon className="font-icon-all" icon={faCapsules} size={"2x"} /><Link style={linkStyle} to="/categories/health">Health</Link></div>
                        <div className="category-sub-div"><FontAwesomeIcon className="font-icon-all" icon={faMicroscope} size={"2x"} /><Link style={linkStyle} to="/categories/science">Science</Link></div>
                    </div>
                    <h2 className="con-news-titles">Showing Newsy Feed From All Sources</h2>

                    <div className="article-index">
                        {this.props.articles.map(item => (
                            
                            <Article key={item.id}
                                
                                article={item}
                            />
                        ))}
                    
                    </div>
                </div>
            )
        }
    }
}

export default Articles
