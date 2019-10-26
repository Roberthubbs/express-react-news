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
import UserModal from './user_modal';
let modal;
if (!modal){
    modal = 1;
}
class Hello extends React.Component{
    constructor({ currentUser, logout, location }){
        super({ currentUser, logout, location })
        this.state = {
            modal: false
        }
        this.modalTrueFalse = this.modalTrueFalse.bind(this);
        // this.welcomeUser = this.welcomeUser.bind(this)
        // this.loginOrSignup = this.loginOrSignup.bind(this)
    }
    //({ currentUser, logout, location }) => {

    // const handleSubmit = (e) => {
    //    e.preventDefault();

    //     const user = currentUser
       
    //     localStorage.removeItem("currentUser");
    //     logout(user).then(window.location.href = location);

    // }
    
    modalTrueFalse = (e) => {
        // debugger;
        e.preventDefault();

        if (this.state.modal === false){

            this.setState({
                modal: true
            })
        } else {
            this.setState({ modal: false}) 
        }
    }
    // loginOrSignUp = () => (
    //     <nav className="login-signup">

    //         <div className="right-nav-bar">
    //             <Link to="/login">Sign In |</Link>
    //             <Link to="/register">Sign Up!</Link>
    //         </div>
    //     </nav>
    // );
    // welcomeUser = () => (
    //     <nav className="greet-user">
    //         <div className="right-nav-bar">
    //             {/* <h2 className="username-greeting">{currentUser.username}</h2> */}

    //             <button className="logout-button-h" onClick={this.modalTrueFalse}>{currentUser.username}</button>
    //             {modal === 2 ? <UserModal userId={currentUser.id} user={currentUser} logout={logout()} /> : null}
    //         </div>


    //     </nav>
    // );

    render(){
        // return(currentUser ? this.welcomeUser : this.loginOrSignUp}) ;
        const { currentUser, logout, location } = this.props
        if (currentUser){
            return(
                <nav className="greet-user">
                    <div className="right-nav-bar">
                        {/* <h2 className="username-greeting">{currentUser.username}</h2> */}

                        <button className="username-greeting" onClick={this.modalTrueFalse}>{currentUser.username}</button>
                        {this.state.modal === true ? <UserModal userId={currentUser.id} user={currentUser} logout={logout} /> : null}
                    </div>


                </nav>
            )
        } else {
            return(
                <nav className="login-signup">

                    <div className="right-nav-bar">
                        <Link to="/login">Sign In |</Link>
                        <Link to="/register">Sign Up!</Link>
                    </div>
                </nav>
            )
        }
    }
}

export default Hello;