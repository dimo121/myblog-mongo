import React from 'react';
//import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';


export default class Header extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            loginOn : false,
            registerOn : false
        };

        this.modalPopup = this.modalPopup.bind(this);
        this.registerModal = this.registerModal.bind(this);
        this.clearModal = this.clearModal.bind(this);
    }
    
    modalPopup () {
        this.setState(() => ({
            loginOn: true
        }));
    }

    clearModal () {
        this.setState(() => ({
            loginOn: false,
            registerOn: false
        }));
    }

    registerModal () {
        this.setState(() => ({
            loginOn: false,
            registerOn: true
        }));
    }

    render() {
        return (
            <div>
                <header className="container">
                    <h1 className="nav__title">ReactJS blog</h1>
                    <div className="nav__container">
                        <NavLink className="nav__links" to="/" exact={true}>Dashboard</NavLink>
                        <NavLink className="nav__links" to="/createblog">Create blog</NavLink>
                        <button className="button" onClick={this.modalPopup}>Sign in</button>
                    </div>
                </header>
                <LoginModal     selectedOption={this.state.loginOn} 
                                clearModal = {this.clearModal}
                                registerModal = {this.registerModal}
                                 />
                <RegisterModal  selectedOption={this.state.registerOn} 
                                clearModal = {this.clearModal}
                                />
            </div>
            );
    }
};
