import React from 'react';
import IDLabel from './IDLabel';
import PwdLabel from './PwdLabel';
import ValidLabel from './ValidLabel';
import NameLabel from './NameLabel'
import PhoneLabel from './PhoneLabel';
import EmailLabel from './EmailLabel';
import AdButton from './AdButton';
import JoinButton from './JoinButton';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pwd: '',
            valid: '',
            name: '',
            phone: '',
            email: '',
            ad: null
        }
        this.handleID = this.handleID.bind(this);
        this.handlePwd = this.handlePwd.bind(this);
        this.handleValid = this.handleValid.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleAd = this.handleAd.bind(this);
    }

    handleID(newID) {
        this.setState({id: newID})
    }

    handlePwd(newPwd) {
        this.setState({pwd: newPwd})
    }

    handleValid(newValid) {
        this.setState({valid: newValid})
    }

    handleName(newName) {
        this.setState({valid: newName})
    }

    handlePhone(newPhone) {
        this.setState({phone: newPhone})
    }

    handleEmail(newEmail) {
        this.setState({email: newEmail})
    }

    handleAd(bool) {
        this.setState({ad: bool})
    }

    render() {
        return (
            <div>
                <IDLabel id={this.state.id} handleID={this.handleID} />
                <PwdLabel />
                <ValidLabel />
                <NameLabel />
                <PhoneLabel />
                <EmailLabel />
                <p></p>
                <AdButton />
                <JoinButton/>
            </div>
        )
    }
}

export default Form;