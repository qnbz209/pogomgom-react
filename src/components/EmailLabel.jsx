import React from 'react';
import renderMessageIfExist from './RenderMessage';

class EmailLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.checkEmail= this.validateEmail.bind(this);
    }

    changeEmail(event) {
        const value = event.target.value;
        this.props.handleAppState('email', value);
        this.validateEmail(value);
    }

    validateEmail(input) {
        if (input.length > 0) {
            if ((input.match(/@/) || []).length === 0) {
                this.setState({
                    errmsg: '이메일 양식 맞춰주세요'
                });
                this.props.validate('isEmailValid', false);
            }
            else {
                this.setState({
                    errmsg: ''
                });
                this.props.validate('isEmailValid', true);
            }
        }
        else {
            this.setState({
                errmsg: ''
            });
            this.props.validate('isEmailValid', false);
        }
    }
    
    render() {
        return (
            <div>
                <label>
                    이메일 <input value={this.props.email} onChange={this.changeEmail} />
                </label>
                {renderMessageIfExist(this.state.errmsg)}
            </div>
        );
    }
}

export default EmailLabel;