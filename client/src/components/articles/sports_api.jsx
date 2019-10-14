import React, { Component } from 'react'
import Article from './article_item';
// const proxy = "https://cors-anywhere.herokuapp.com/"
export default class SportsArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://gnews.io/api/v3/topics/sports?token=2c97995ff57174bcafee97440d49f241")
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
            .catch(() => console.log("Cant access, blocked by gnews"))
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
                            <Article key={item.id}
                                urlToImage={item.image}
                                link={item.source.url}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            )
        }
    }
}


