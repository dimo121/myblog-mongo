import React from 'react';
import Modal from 'react-modal';

export default class LoginModal extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            user : '',
            pass : ''
        }
    
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
    }

    onChangeUser = (e) => {
        const user = e.target.value;
        this.setState(() => ({ user }));
    }

    onChangePass = (e) => {
        const pass = e.target.value;
        this.setState(() => ({ pass }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log(this.state)
    }

    render() {
        return (
            <Modal  isOpen={!!props.selectedOption}
                    contentLabel="Login modal"
                    onRequestClose={props.clearModal}
                    closeTimeoutMS = {0}
                    ariaHideApp = {false}
                    className="modal" //causes default styles to be disabled 
                    >
                        <h3 className="modal__title">Enter login details</h3>
                        <form onSubmit = { this.onSubmit }>
                            <label htmlFor="firstName">Username:</label><br />
                                <input  type="text" 
                                        id="userName" 
                                        name="userName"
                                        placeholder="..."
                                        onChange={this.onChangeUser}
                                        >
                                </input><br/><br/>
                            <label htmlFor="familyName">Password:</label><br />
                                <input  type="text" 
                                        id="password" 
                                        name="password"
                                        placeholder="..."
                                        onChange={this.onChangePass}
                                        >
                                </input><br/><br/>
                            <button className="modal__button" onClick={props.clearModal}>Cancel</button>
                            <input className="modal__button" type='submit' value='Enter' onClick={props.clearModal} /> 
                        </form>
                        <div>
                                <p>If you are not a member please</p>
                                <button className="modal__button" onClick={props.registerModal}>Register</button>
                        </div>
            </Modal>
        );
    };
};
