import React from 'react'

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/sources=abc-news?apiKey=5d8f7e7fb04d49f8b5afc10db6e05367")
            .then(res => res.json())
            .then(

                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.articles
                    })
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <div className="article-outer-ind">
                        {items.map(item => (
                            <Article key={item.title}
                                urlToImage={item.urlToImage}
                                link={item.url}
                                title={item.title}
                                author={item.author}
                                description={item.description}
                                content={item.content}
                            />
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default Article;