// import React from 'react';
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
// class Hello extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             currentUser: this.props.currentUser || null
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
        
//     }
   
    
    
//     // componentWillMount(){
//     //     this.setState({currentUser: this.props.currentUser})
//     // }
//     componentWillMount(){
//         this.setState({currentUser: this.props.currentUser})
//     }
//     render(){
        
//         const loginOrSignUp = () => (
//             <nav className="login-signup">
//                 <div className="right-nav-bar">
//                     <Link to="/login">Sign In |</Link>
//                     <Link to="/register">Sign Up!</Link>
//                 </div>
//             </nav>
//         );
//         const welcomeUser = () => (
//             <nav className="greet-user">
            
//                 <div className="right-nav-bar">
//                     <h2 className="username-greeting">News for {this.state.currentUser.username}</h2>

//                     <button className="logout-button-h" onClick={this.handleSubmit}>Sign Out</button>
//                 </div>


//             </nav>
//         );
//     //    this.updateUser()
//     return (this.state.currentUser === null ? welcomeUser() : loginOrSignUp());
//     }
// }

// export default Hello;
import React from 'react';
import { Link } from 'react-router-dom';
const Hello = ({ currentUser, logout, location }) => {

    const handleSubmit = (e) => {
       e.preventDefault();

        const user = currentUser
        // debugger;
        localStorage.removeItem("currentUser");
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

    return currentUser ? welcomeUser() : loginOrSignUp();
}

export default Hello;