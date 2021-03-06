import React from 'react'
import Article from '../article_item';
import WeatherCurrent from '../../widgets/weather_current';
import ClipLoader from 'react-spinners/ClipLoader';
import { LinksMenu } from '../links/links';
class LiberalArticles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        };
    }

    async componentDidMount() {


        await this.props.receiveAllArticles()
       
        if (this.props.articles) {
           
            this.setState({ articles: this.props.articles, isLoaded: true })
        }
    }
    render() {
        let { isLoaded } = this.state;

        if (!isLoaded) {
            return (<div className="article-show">
                <ClipLoader


                    size={300}
                    color={'#123abc'}
                    loading={this.state.loading}
                /></div>
            )
        } else {
            const { articles } = this.state
            return (
                <div>
                    <WeatherCurrent />
                    <LinksMenu />
                    <h2 className="con-news-titles">Showing Articles From Typically Liberal News Sources</h2>

                    <div className="article-index">
                        {Object.values(articles).map(item => (

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

export default LiberalArticles