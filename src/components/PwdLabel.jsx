import React from 'react';

class PwdLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            isValidate: false,
            errorMessage: ''
        };
        this.ChangeValue = this.ChangeValue.bind(this);
        this.ValidatePwd = this.validatePwd.bind(this);
        this.renderErrorMessage = this.renderErrorMessage.bind(this);
    }

    ChangeValue(input) {
        this.setState({value: input.target.value});
        this.validatePwd();
    }

    validatePwd() {
        const input = this.state.value;
        if (input.length > 0) {
            if (input.length < 8) {
                this.setState({isValidate: false,
                    errorMessage: "비밀번호는 8자 이상"
                })
            } else if ((input.match(/[a-z]/g) || []).length === 0) {
                this.setState({isValidate: false,
                    errorMessage: "영어도 포함시켜줘"
                });
            } else if ((input.match(/[0-9]/g) || []).length === 0) {
                this.setState({isValidate: false,
                    errorMessage: "숫자도 포함시켜줘"
                });
            } else {
                this.setState({isValidate: true,
                    errorMessage: ""
                });
            }
        }
    }

    renderErrorMessage() {
        if (this.state.isValidate === false) {
            return <p>{this.state.errorMessage}</p>;
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        비밀번호 <input value={this.state.value} onChange={this.ChangeValue}/>
                    </label>
                </form>
                {this.renderErrorMessage()}
            </div>
        );
    }
}

export default PwdLabel;