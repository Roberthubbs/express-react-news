import React from 'react'

class Articles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5d8f7e7fb04d49f8b5afc10db6e05367")
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
        if (error){
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded){
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <div className="article-outer-ind">
                        {items.map(item => (
                            <div className="article-index"key={item.title}>
                                <img className="index-image"src={item.urlToImage}></img>
                                <a href src={item.url}>Link</a>
                                {item.title}
                                {item.author}
                                {item.description}
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default Articles
