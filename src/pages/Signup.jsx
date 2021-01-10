import React from 'react';
import IDLabel from '../components/IDLabel';
import PwdLabel from '../components/PwdLabel';
import NameLabel from '../components/NameLabel';
import PhoneLabel from '../components/PhoneLabel';
import EmailLabel from '../components/EmailLabel';
import AdButton from '../components/AdButton';
import JoinButton from '../components/JoinButton';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pwd: '',
            name: '',
            phone: '',
            email: '',
            ad: '',
            isIDValid: false,
            isPwdValid: false,
            isConfirmValid: false,
            isPhoneValid: false,
            isEmailValid: false
        };
        this.setStateWithKey = this.setStateWithKey.bind(this);
    }

    setStateWithKey(key, value) {
        this.setState({
            [key]: value
        })
    }

    render() {
        const { isIDValid, isPwdValid, isConfirmValid, isPhoneValid, isEmailValid } = this.state;
        const isAdValid = this.state.ad !== '';
        const isNameValid = this.state.name !== '';
        const isAllValid = isIDValid && isPwdValid && isConfirmValid && isPhoneValid && isEmailValid && isAdValid && isNameValid;
        
        var requestBody = JSON.stringify({
            id: this.state.id,
            password: this.state.pwd,
            name: this.state.name,
            phoneAddress: this.state.phone,
            emailAddress: this.state.email,
            advertisement: this.state.ad
        });

        const requestOptions = {
            method: 'POST',
            body: requestBody,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        return (
            <div>
                <IDLabel
                    id={this.state.id}
                    setStateWithKey={this.setStateWithKey} />
                <PwdLabel
                    pwd={this.state.pwd}
                    setStateWithKey={this.setStateWithKey} />
                <NameLabel
                    name={this.state.name}
                    setStateWithKey={this.setStateWithKey} />
                <PhoneLabel
                    phone={this.state.phone}
                    setStateWithKey={this.setStateWithKey} />
                <EmailLabel
                    email={this.state.email}
                    setStateWithKey={this.setStateWithKey} />
                <AdButton
                    setStateWithKey={this.setStateWithKey} />
                <JoinButton
                    requestOptions={requestOptions}
                    valid={isAllValid}
                    id={this.state.id}
                    name={this.state.name}
                    signup={this.props.changeInput}/>
            </div>
        )
    }
}

export default Signup;