import React from 'react'
import Article from './article_item';
class Articles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        };
    }

    async componentDidMount(){
        
        await this.props.receiveAllArticles()
        if (this.props.articles){
            // debugger;
            // console.log([this.props.articles])
            this.setState({articles: [this.props.articles], isLoaded: true})
        }
    }
    render() {
        let { error, isLoaded, articles } = this.state;
        
         if (!isLoaded){
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <div className="article-outer-ind">
                        {articles.map(item => (
                            
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

export default Articles
