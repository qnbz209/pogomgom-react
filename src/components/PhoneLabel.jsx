import React from 'react';
import renderErrorMessage from './ErrorMessage.jsx';

class PhoneLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.changePhone = this.changePhone.bind(this);
        this.checkPhone= this.checkPhone.bind(this);
    }

    changePhone(event) {
        this.props.handlePhone(event.target.value);
        this.checkPhone(event.target.value);
    }

    checkPhone(input) {
        if (input.length > 0) {
            if ((input.match(/[0-9]/g) || []).length === 0) {
                this.setState({
                    errmsg: '전화번호는 숫자로만 이루어져있어요'
                });
                this.props.validatePhone(false);
            }
            else {
                this.setState({
                    errmsg: ''
                });
                this.props.validatePhone(true);
            }
        }
    }

    render() {
        return (
            <div>
                <label>
                    전화번호 <input value={this.props.phone} onChange={this.changePhone} />
                </label>
                {renderErrorMessage(this.state.errmsg)}
            </div>
        );
    }
}

export default PhoneLabel;