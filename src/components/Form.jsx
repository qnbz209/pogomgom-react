import React from 'react';
import IDLabel from './IDLabel';
import PwdLabel from './PwdLabel';
import ReLabel from './ReLabel';
import NameLabel from './NameLabel';
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
            re: '',
            name: '',
            phone: '',
            email: '',
            ad: null,
            idValid: false,
            pwdValid: false,
            reValid: false,
            phoneValid: false,
            emailValid: false
        }
        this.handleID = this.handleID.bind(this);
        this.validateID = this.validateID.bind(this);
        this.handlePwd = this.handlePwd.bind(this);
        this.validatePwd = this.validatePwd.bind(this);
        this.handleRe = this.handleRe.bind(this);
        this.validateRe = this.validateRe.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.validatePhone = this.validatePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handleAd = this.handleAd.bind(this);
    }

    handleID(input) {
        this.setState({id: input})
    }

    validateID(bool) {
        this.setState({idValid: bool})
    }

    handlePwd(input) {
        this.setState({pwd: input})
    }

    validatePwd(bool) {
        this.setState({pwdValid: bool})
    }

    handleRe(input) {
        this.setState({re: input})
    }

    validateRe(bool) {
        this.setState({reValid: bool})
    }

    handleName(input) {
        this.setState({name: input})
    }

    handlePhone(input) {
        this.setState({phone: input})
    }

    validatePhone(bool) {
        this.setState({phoneValid: bool})
    }

    handleEmail(input) {
        this.setState({email: input})
    }

    validateEmail(bool) {
        this.setState({emailValid: bool})
    }

    handleAd(bool) {
        this.setState({ad: bool})
    }

    render() {
        return (
            <div>
                <IDLabel
                    id={this.state.id}
                    handleID={this.handleID}
                    validateID={this.validateID} />
                <PwdLabel
                    pwd={this.state.pwd}
                    handlePwd={this.handlePwd}
                    validatePwd={this.validatePwd} />
                <ReLabel
                    re={this.state.re}
                    handleRe={this.handleRe}
                    pwd={this.state.pwd}
                    validateRe={this.validateRe} />
                <NameLabel
                    name={this.state.name}
                    handleName={this.handleName} />
                <PhoneLabel
                    phone={this.state.phone}
                    handlePhone={this.handlePhone}
                    validatePhone={this.validatePhone} />
                <EmailLabel
                    email={this.state.email}
                    handleEmail={this.handleEmail}
                    validateEmail={this.validateEmail} />
                <AdButton
                    ad={this.state.ad}
                    handleAd={this.handleAd} />
                <JoinButton
                    idValid={this.state.idValid}
                    pwdValid={this.state.pwdValid}
                    reValid={this.state.reValid}
                    name={this.state.name}
                    phoneValid={this.state.phoneValid}
                    emailValid={this.state.emailValid}
                    ad={this.state.ad} />
            </div>
        )
    }
}

export default Form;