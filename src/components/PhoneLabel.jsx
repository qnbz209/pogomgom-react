import React from 'react';
import renderMessageIfExist from './RenderMessage';

class PhoneLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.changePhone = this.changePhone.bind(this);
        this.checkPhone= this.validatePhone.bind(this);
    }

    changePhone(event) {
        this.props.handleAppState('phone', event.target.value);
        this.validatePhone(event.target.value);
    }

    validatePhone(input) {
        if (input.length > 0) {
            if ((input.match(/[0-9]/g) || []).length === 0) {
                this.setState({
                    errmsg: '전화번호는 숫자로만 이루어져있어요'
                });
                this.props.validate('isPhoneValid', false);
            }
            else {
                this.setState({
                    errmsg: ''
                });
                this.props.validate('isPhoneValid', true);
            }
        }
        else {
            this.setState({
                errmsg: ''
            });
            this.props.validate('isPhoneValid', false);
        }
    }

    render() {
        return (
            <div>
                <label>
                    전화번호 <input value={this.props.phone} onChange={this.changePhone} />
                </label>
                {renderMessageIfExist(this.state.errmsg)}
            </div>
        );
    }
}

export default PhoneLabel;