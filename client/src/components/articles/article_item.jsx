import React from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

let linkStyle = {
    textDecoration: 'none',
    fontSize: "30px",
    color: "white",
    fontWeight: "700px"
}
class Article extends React.Component {
    

    //[article-outer-ind, list-box, article-index-list, article-index, index-image, article-image]

    render() {
       
        const {title, urlToImage, url, author, description, content, id} = this.props.article
        // console.log(id)
            return (
                <div>
                    <div className="list-box">
                        <div className="article-index-list">
                            <div>
                                <Link className="article-link" to={`/show/${id}`}>To Discussion</Link>
                                <img src={urlToImage} alt="" className="index-image"/>
                               <p className="list-box"><a className="list-box" style={linkStyle}href={url}>To Article</a></p>
                                <p className="list-box">{title}</p>
                                <p className="list-box"> Author: {author}</p>
                                <p className="list-box">{description}</p>
                                <p className="list-box">{content}</p>
                        </div>
                        </div>

                    </div>
                </div>
            )
        }
    }


export default withRouter(Article);