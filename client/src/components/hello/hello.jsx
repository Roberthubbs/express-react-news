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
        
    }
    
    
    modalTrueFalse = (e) => {
     
        e.preventDefault();

        if (this.state.modal === false){

            this.setState({
                modal: true
            })
        } else {
            this.setState({ modal: false}) 
        }
    }
   

    render(){
        const { currentUser, logout } = this.props
        if (currentUser){
            return(
                <nav className="greet-user">
                    <div className="right-nav-bar">

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