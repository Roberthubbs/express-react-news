import React from 'react';
import { Link } from 'react-router-dom';
const Hello = ({ currentUser, logout, location }) => {
   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const user = currentUser
        logout(user).then(window.location.href = location);

    }
    const loginOrSignUp = () => (
        <nav className="login-signup">
            <div className="right-nav-bar">
                <Link to="/login">Sign In |</Link>
                <Link to="/register">Sign Up!</Link>
            </div>
        </nav>
    );
    const welcomeUser = () => (
        <nav className="greet-user">
           
            <div className="right-nav-bar">
                <h2 className="username-greeting">{currentUser.username}</h2>

                <button className="logout-button-h" onClick={handleSubmit}>Sign Out</button>
            </div>


        </nav>
    );
        // debugger;
    return currentUser ? welcomeUser() : loginOrSignUp();
}

export default Hello;