import React from 'react';

import { Link } from 'react-router-dom';
export const LinksMenu = () => {
    return (
        <div className="links-menu">
            <h2 className="liberal-link-header">Liberal</h2>
            <ul className="liberal-side-links">
                <Link className="menu-link-l"to="/liberal/world"><li className="liberal-link">World</li></Link>
                <Link className="menu-link-l" to="/liberal/business"><li className="liberal-link">Business</li></Link>
                <Link className="menu-link-l" to="/liberal/election"><li className="liberal-link">Election</li></Link>
            </ul>
            <h2 className="conservative-link-header">Conservative</h2>
            <ul className="conservative-side-links">
                <Link className="menu-link-l" to="/conservative/world"><li className="conservative-link">World</li></Link>
                <Link className="menu-link-l" to="/conservative/business"><li className="conservative-link">Business</li></Link>
                <Link className="menu-link-l" to="/conservative/election"><li className="conservative-link">Election</li></Link>
            </ul>
        </div>
    )
}
