import React from 'react'
import Article from './article_item';
import WeatherCurrent from '../widgets/weather_current';
// import Stocks from '../widgets/stocks'
import { LinksMenu } from './links/links';
import HappyArticles from './articleWidgets/sports_container';
import ClipLoader from 'react-spinners/ClipLoader';
import { TwitterTimelineEmbed} from 'react-twitter-embed';

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
                    <h2 className="con-news-titles">Showing Articles From All Sources</h2>

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
