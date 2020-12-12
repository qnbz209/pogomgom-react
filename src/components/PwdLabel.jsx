import React from 'react';
import renderMessageIfExist from './RenderMessage';

class PwdLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pwdErrmsg: '',
            confirmErrmsg: ''
        };
        this.changePwd = this.changePwd.bind(this);
        this.validatePwd = this.validatePwd.bind(this);
        this.validateConfirm = this.validateConfirm.bind(this);
    }

    changePwd(event) {
        this.props.handleState('pwd', event.target.value);
        this.validatePwd(event.target.value);
    }

    validatePwd(input) {
        if (input.length > 0) {
            if (input.length < 8) {
                this.setState({
                    pwdErrmsg: '비밀번호는 8자 이상'
                });
                this.props.validate('isPwdValid', false);
            } else if ((input.match(/[a-z]/g) || []).length === 0) {
                this.setState({
                    pwdErrmsg: '영어도 포함시켜줘'
                });
                this.props.validate('isPwdValid', false);
            } else if ((input.match(/[0-9]/g) || []).length === 0) {
                this.setState({
                    pwdErrmsg: '숫자도 포함시켜줘'
                });
                this.props.validate('isPwdValid', false);
            }
            else {
                this.setState({
                    pwdErrmsg: ''
                });
                this.props.validate('isPwdValid', true);
            }
        }
        else {
            this.setState({
                pwdErrmsg: ''
            });
            this.props.validate('isPwdValid', false);
        }
    }

    validateConfirm(event) {
        const input = event.target.value;

        if (input.length > 0) {
            if (input === this.props.pwd) {
                this.setState({
                    confirmErrmsg: ''
                });
                this.props.validate('isConfirmValid', true);
            }
            else {
                this.setState({
                    confirmErrmsg: '비밀번호랑 똑같이'
                });
                this.props.validate('isConfirmValid', false);
            }
        }
        else {
            this.setState({
                confirmErrmsg: ''
            });
            this.props.validate('isConfirmValid', false);
        }
    }

    render() {
        return (
            <div>
                <div>
                    <label>
                        비밀번호 <input type="password" value={this.props.pwd} onChange={this.changePwd} />
                    </label>
                    {renderMessageIfExist(this.state.pwdErrmsg)}
                </div>
                <div>
                    <label>
                        비밀번호확인 <input type="password" onChange={this.validateConfirm} />
                    </label>
                    {renderMessageIfExist(this.state.confirmErrmsg)}
                </div>
            </div>
        );
    }
}

export default PwdLabel;