import React from 'react'
import Article from '../article_item';
import WeatherCurrent from '../../widgets/weather_current';

class ConservativeArticlesWorld extends React.Component {
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
            return <div>Loading...</div>
        } else {
            const { articles } = this.state
            return (
                <div>
                    <WeatherCurrent />
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

export default ConservativeArticlesWorld