import React from 'react'
import Article from '../article_item';
import WeatherCurrent from '../../widgets/weather_current';

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
        let { error, isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            const { articles } = this.state
            return (
                <div>
                    <WeatherCurrent />
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