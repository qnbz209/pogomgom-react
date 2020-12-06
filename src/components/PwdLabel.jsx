import React from 'react';
import renderErrorMessage from './ErrorMessage.jsx';

class PwdLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            errmsg: ''
        };
        this.changePwd = this.changePwd.bind(this);
        this.checkPwd = this.checkPwd.bind(this);
    }

    changePwd(event) {
        this.props.handlePwd(event.target.value);
        this.checkPwd(event.target.value);
    }

    checkPwd(input) {
        if (input.length > 0) {
            if (input.length < 8) {
                this.setState({
                    errmsg: '비밀번호는 8자 이상'
                });
                this.props.validatePwd(false);
            } else if ((input.match(/[a-z]/g) || []).length === 0) {
                this.setState({
                    errmsg: '영어도 포함시켜줘'
                });
                this.props.validatePwd(false);
            } else if ((input.match(/[0-9]/g) || []).length === 0) {
                this.setState({
                    errmsg: '숫자도 포함시켜줘'
                });
                this.props.validatePwd(false);
            }
            else {
                this.setState({
                    errmsg: ''
                });
                this.props.validatePwd(true);
            }
        }
        else {
            this.setState({
                errmsg: ''
            });
            this.props.validatePwd(false);
        }
    }

    render() {
        return (
            <div>
                <label>
                    비밀번호 <input type="password" value={this.props.pwd} onChange={this.changePwd} />
                </label>
                {renderErrorMessage(this.state.errmsg)}
            </div>
        );
    }
}

export default PwdLabel;