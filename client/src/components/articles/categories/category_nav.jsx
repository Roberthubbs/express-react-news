import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark, faMobileAlt, faBriefcase, faTheaterMasks, faCapsules, faMicroscope} from '@fortawesome/free-solid-svg-icons'
const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    paddingRight: "10px"
}
class CategoryNav extends React.Component {
    
    render(){
        return (
            <div className="category-nav">
                <div className="category-sub-div"><FontAwesomeIcon icon={faLandmark} /><Link style={linkStyle} to="/categories/politics">Politics</Link></div>
                <div className="category-sub-div"><FontAwesomeIcon icon={faMobileAlt} /><Link style={linkStyle} to="/categories/technology">Technology</Link></div>
                <div className="category-sub-div"><FontAwesomeIcon icon={faBriefcase} /><Link style={linkStyle} to="/categories/business">Business</Link></div>
                <div className="category-sub-div"><FontAwesomeIcon icon={faTheaterMasks} /><Link style={linkStyle} to="/categories/entertainment">Entertainment</Link></div>
                <div className="category-sub-div"><FontAwesomeIcon icon={faCapsules} /><Link style={linkStyle} to="/categories/health">Health</Link></div>
                <div className="category-sub-div"><FontAwesomeIcon icon={faMicroscope} /><Link style={linkStyle} to="/categories/science">Science</Link></div>
            </div>
        )
    }
}
export default withRouter(CategoryNav)
