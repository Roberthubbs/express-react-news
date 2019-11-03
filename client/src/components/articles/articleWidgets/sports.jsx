import React from 'react'
// import Article from '../article_item';
import ClipLoader from 'react-spinners/ClipLoader';
class ArticlesSports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: [],
            showWidget: false
        };
        this.showList = this.showList.bind(this);
    }


    async componentDidMount() {


        await this.props.receiveAllArticles()

        if (this.props.articles) {

            this.setState({ articles: this.props.articles, isLoaded: true })
        }
    }
    showList(e){
        e.preventDefault()
        if (!this.state.showWidget){
            this.setState({showWidget: true})
        } else {
            this.setState({ showWidget: false })
        }
    }
    render() {
        let { isLoaded } = this.state;

        if (!isLoaded) {
            return <div>  <div className="sports-article-list">
                <ClipLoader
                    
                    
                    size={150}
                    color={'#123abc'}
                    loading={this.state.loading}
                />
            </div> </div>
        } else {
            const { articles } = this.state
            return (
                <div className="sports-article-list">
                    <button className="sports-articles-button" onClick={this.showList}>Show Sports Headlines</button>
                    {this.state.showWidget ? 
                    <ul className="article-sports-index">
                        {Object.values(articles).map(item => (

                            <li className="sport-item"><a className="sport-item" href={item.url}>{item.title}</a></li>
                        ))}
                    </ul>
                    : null}
                </div>
            )
        }
    }
}

export default ArticlesSports