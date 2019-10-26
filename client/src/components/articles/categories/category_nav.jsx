import React from 'react'
import { Link, withRouter } from 'react-router-dom'

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
                <Link style={linkStyle} to="/categories/politics">Politics</Link>
                <Link style={linkStyle} to="/categories/technology">Technology</Link>
                <Link style={linkStyle} to="/categories/business">Business</Link>
                <Link style={linkStyle} to="/categories/entertainment">Entertainment</Link>
                <Link style={linkStyle} to="/categories/health">Health</Link>
                <Link style={linkStyle} to="/categories/science">Science</Link>
            </div>
        )
    }
}
export default withRouter(CategoryNav)
