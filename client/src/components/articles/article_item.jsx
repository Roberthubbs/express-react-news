import React from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faComments, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
let linkStyle = {
    textDecoration: 'none',
    fontSize: "30px",
    color: "black",
    fontWeight: "700px"
}
class Article extends React.Component {
    

    //[article-outer-ind, list-box, article-index-list, article-index, index-image, article-image]

    render() {
       
        const {title, urlToImage, url, author, description, content, id} = this.props.article
     
            return (
                <div>
                    <div className="list-box">
                        <div className="article-index-list">
                            <div>
                                <p className="list-box-bold">{title}</p>
                                <img src={urlToImage} alt="" className="index-image"/>
                                <p className="list-box"> Author: {author}</p>
                                <p className="list-box">{description}</p>
                                <p className="list-box">{content}</p>
                                <div className="article-bottom-div">
                                    <p className="list-box"><Link style={linkStyle} to={`/show/${id}`}><FontAwesomeIcon icon={faComments}/> To Discussion</Link></p>
                                    <p className="list-box"><a className="list-box" style={linkStyle} href={url}><FontAwesomeIcon icon={faExternalLinkAlt} /> To Full Article</a></p>
                                </div>
                        </div>
                        </div>

                    </div>
                </div>
            )
        }
    }


export default withRouter(Article);