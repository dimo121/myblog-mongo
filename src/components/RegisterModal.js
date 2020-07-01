import React from 'react';
import Modal from 'react-modal';

export default class RegisterModal extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userName : '',
            email : '',
            password : ''
        };

        this.onUserChange = this.onUserChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onUserChange = (e) => {
        const userName = e.target.value;
        this.setState(() => ({ userName }));
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        //make this an async function and send state to server for login

        //clear modal if details are accepted,

        //display error message if email is already in use on database
        console.log(this.state);
    }

    render(){
        return (
            <Modal isOpen={!!this.props.selectedOption}
            contentLabel="Register modal"
            onRequestClose={this.props.clearModal}
            closeTimeoutMS = {200}
            ariaHideApp = {false}
            className="modal" //causes default styles to be disabled 
            >
                <h3 className="modal__title">Please enter your details:</h3>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="firstName">Username:</label><br />
                        <input  type="text" 
                                id="userName" 
                                name="userName"
                                placeholder="..."
                                onChange={this.onUserChange}
                                >
                        </input><br/><br/>
                    <label htmlFor="email">Email:</label><br />
                        <input  type="text" 
                                id="email" 
                                name="email"
                                placeholder="..."
                                onChange={this.onEmailChange}
                                >
                        </input><br/><br/>
                    <label htmlFor="familyName">Password:</label><br />
                        <input  type="text" 
                                id="password" 
                                name="password"
                                placeholder="..."
                                onChange={this.onPasswordChange}
                                >
                        </input><br/><br/>
                    <button className="modal__button" onClick={this.props.clearModal}>Cancel</button>
                    <input className="modal__button" type='submit' value='Enter' />  
                </form>
            </Modal>
        );
    }

}
