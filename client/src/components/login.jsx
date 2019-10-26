import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDemocrat, faRepublican } from '@fortawesome/free-solid-svg-icons';
import{ RECEIVE_CURRENT_USER } from '../actions/session_actions';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            politicalAffiliation: null
        };
        this.handleGuestSubmit = this.handleGuestSubmit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.decideConservative = this.decideConservative.bind(this);
        this.decideLiberal = this.decideLiberal.bind(this);
        
    }


    componentWillUnmount() {
        this.props.resetErrors();
    }



    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
       
        this.props.processForm(user).then((action) => {
            debugger;
            if (action.type === RECEIVE_CURRENT_USER){
                 this.props.history.push(`/user/${action.currentUser.data.user.id}`)
                };
            }
        );

    }
    handleGuestSubmit(e) {
        e.preventDefault();

        this.props.loginDemo({ username: "DemoUser", password: "Password" }).then(() => this.props.history.push("/"));
    }

    decideLiberal(e){
        e.preventDefault()
        this.setState({
            politicalAffiliation: "Liberal"
        })
    }
    decideConservative(e){
        e.preventDefault()
        this.setState({
            politicalAffiliation: "Conservative"
        })
    }
    renderErrors() {
        return (
            <div className="login-errors">
                <ul>
                    {this.props.errors.map((error, i) => (

                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>

        )
    }





    decideText() {
        if (this.props.formType === 'Login') {
            return "New to Newsy? "
        } else {
            return "Returning User? "
        }
    };

    render() {
        if (this.props.errors.length > 0) {
            return (

                <div className="background-image-signup">
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-box">
                            <h2 className="title-login"></h2>
                            <br />


                            <div className="login-form">
                                <br />
                                <label className="login-label">
                                    <input type="text"
                                        placeholder="   Username"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input" />
                                </label>
                                <label className="login-label">
                                    <input type="password"
                                        placeholder="   Password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="password-input" />
                                </label>
                                {this.props.formType === "Signup" ?
                                    <div className="decider-div">
                                        <button onClick={this.decideLiberal} className="decider-button-lib"><FontAwesomeIcon icon={faDemocrat} size={"4x"} /></button>
                                        <button onClick={this.decideConservative} className="decider-button-con"><FontAwesomeIcon icon={faRepublican} size={"4x"} /></button>
                                    <p>{this.state.politicalAffiliation}</p>    
                                        {/* <button></button> */}
                                    </div> : null}
                                <h2 className="impt-label">{this.renderErrors()}</h2>
                                <br />

                                <input className="session-form-submit" type="submit" value={this.props.formType} />
                                <button className="session-form-submit" onClick={this.handleGuestSubmit} >Continue As Guest</button>
                                <h2 className="link-change">{this.decideText()}{this.props.navLink}</h2>
                            </div>
                        </form>

                    </div>

                </div>

            );
        } else {
            return (

                <div className="background-image-signup">
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-box">
                            <h2 className="title-login"></h2>
                            <br />


                            <div className="login-form">
                                <br />
                                <label className="login-label">
                                    <input type="text"
                                        placeholder="  Username"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input" />
                                </label>
                                <label className="login-label">
                                    <input type="password"
                                        placeholder="   Password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="password-input" />
                                </label>
                                {this.props.formType === "Signup" ?
                                    <div className="decider-div">
                                        <input type="button" onClick={this.decideLiberal} className="decider-button-lib" value="Liberal" />
                                        <input type="button" onClick={this.decideConservative} className="decider-button-con" value="Conservative"/>
                                        {/* <button></button> */} <p className="political-label">{this.state.politicalAffiliation}</p> 
                                    </div> : null}
                                {/* <br /> */}

                                <input className="session-form-submit" type="submit" value={this.props.formType} />
                                <button className="session-form-submit" onClick={this.handleGuestSubmit} >Continue As Guest</button>
                                <h2 className="link-change">{this.decideText()}{this.props.navLink}</h2>

                            </div>
                        </form>

                    </div>

                </div>
            )

        }
    }
}

export default withRouter(SessionForm);