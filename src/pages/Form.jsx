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
                <ConditionalLink
                    to="/complete"
                    condition={this.state.isIDValid &&
                               this.state.isPwdValid &&
                               this.state.isConfirmValid &&
                               this.props.name !== '' &&
                               this.state.isPhoneValid &&
                               this.state.isEmailValid &&
                               this.state.adAgree !== null}>
                    <JoinButton
                        isIDValid={this.state.isIDValid}
                        isPwdValid={this.state.isPwdValid}
                        isConfirmValid={this.state.isConfirmValid}
                        name={this.props.name}
                        isPhoneValid={this.state.isPhoneValid}
                        isEmailValid={this.state.isEmailValid}
                        adAgree={this.state.adAgree}
                        validate={this.handleState} />
                </ConditionalLink>
            </div>
        )
    }
}

export default Form;