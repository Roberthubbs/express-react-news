import React from 'react'
import Article from '../article_item';
import WeatherCurrent from '../../widgets/weather_current';

class NPRArticles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        };
    }

    async componentDidMount() {
        // fetch("http://api.npr.org/query?id=1017,1013,139482413,1131,1025,1124,1020,1135,1029,1009,1137,4467349,1045,1003,1122,1001,1015,1016,1007,1026,1055&apiKey=ACVKcurEKGXXilkuvjn49vptDzhjjvnWfpOMgb08")
        fetch("http://api.npr.org/query?id=1007,3&numResults=10")
            .then(res => res.text())
            .then(
                (result) => {
                
                    this.setState({
                        isLoaded: true,
                        articles: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }
    render() {
        let { error, isLoaded, articles } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <WeatherCurrent />
                    <div className="article-index">
                        {articles[0].map(item => (

                            <Article key={item.id}
                                // urlToImage={item.urlToImage}
                                // link={item.url}
                                // title={item.title}
                                // author={item.author ? item.author : "No Known Author"}
                                // description={item.description}
                                // content={item.content}
                                article={item}
                            />
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default NPRArticles
