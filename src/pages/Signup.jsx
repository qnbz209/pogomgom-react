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
        const isAdValid = this.props.ad !== '';
        const isNameValid = this.props.name !== '';
        const isAllValid = isIDValid && isPwdValid && isConfirmValid && isPhoneValid && isEmailValid && isAdValid && isNameValid;
        
        var requestBody = JSON.stringify({
            id: this.props.id,
            password: this.props.pwd,
            name: this.props.name,
            phoneAddress: this.props.phone,
            emailAddress: this.props.email,
            advertisement: this.props.ad
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
                    id={this.props.id}
                    handleAppState={this.props.changeParentState}
                    validate={this.setStateWithKey} />
                <PwdLabel
                    pwd={this.props.pwd}
                    handleAppState={this.props.changeParentState}
                    validate={this.setStateWithKey} />
                <NameLabel
                    name={this.props.name}
                    handleAppState={this.props.changeParentState}
                    validate={this.setStateWithKey} />
                <PhoneLabel
                    phone={this.props.phone}
                    handleAppState={this.props.changeParentState}
                    validate={this.setStateWithKey} />
                <EmailLabel
                    email={this.props.email}
                    handleAppState={this.props.changeParentState}
                    validate={this.setStateWithKey} />
                <AdButton
                    handleAppState={this.props.changeParentState} />
                <JoinButton
                    requestOptions={requestOptions}
                    valid={isAllValid} />
            </div>
        )
    }
}

export default Signup;