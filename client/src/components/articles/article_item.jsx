import React from 'react'
import { withRouter } from 'react-router-dom'
class Article extends React.Component {
    

    
    render() {
        console.log(this.props.article)
        const {title, urlToImage, url, author, description, content} = this.props.article
            return (
                <div>
                    <div className="article-outer-ind">
                        
                            <div>{title}
                                {urlToImage}
                                {url}
                                {title}
                                {author}
                                {description}
                                {content}
                        </div>

                    </div>
                </div>
            )
        }
    }


export default withRouter(Article);