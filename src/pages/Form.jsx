import React from 'react';
import IDLabel from '../components/IDLabel';
import PwdLabel from '../components/PwdLabel';
import NameLabel from '../components/NameLabel';
import PhoneLabel from '../components/PhoneLabel';
import EmailLabel from '../components/EmailLabel';
import AdButton from '../components/AdButton';
import JoinButton from '../components/JoinButton';
import ConditionalLink from '../components/ConditionalLink';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isIDValid: false,
            isPwdValid: false,
            isConfirmValid: false,
            isPhoneValid: false,
            isEmailValid: false,
            adAgree: null,
            allValid: false
        }
        this.handleState = this.handleState.bind(this);
    }

    handleState(key, value) {
        this.setState({
            [key]: value
        })
    }

    render() {
        const isAllValid = this.state.isIDValid &&
                           this.state.isPwdValid &&
                           this.state.isConfirmValid &&
                           this.state.isPwdValid &&
                           this.state.isEmailValid &&
                           this.state.adAgree !== null &&
                           this.props.name !== ''
        
        return (
            <div>
                <IDLabel
                    id={this.props.id}
                    handleState={this.props.handleState}
                    validate={this.handleState} />
                <PwdLabel
                    pwd={this.props.pwd}
                    handleState={this.props.handleState}
                    validate={this.handleState} />
                <NameLabel
                    name={this.props.name}
                    handleState={this.props.handleState}
                    validate={this.handleState} />
                <PhoneLabel
                    phone={this.props.phone}
                    handleState={this.props.handleState}
                    validate={this.handleState} />
                <EmailLabel
                    email={this.props.email}
                    handleState={this.props.handleState}
                    validate={this.handleState} />
                <AdButton
                    validate={this.handleState} />
                <ConditionalLink to="/complete" condition={isAllValid}>
                    <JoinButton
                        valid = {isAllValid} />
                </ConditionalLink>
            </div>
        )
    }
}

export default Form;