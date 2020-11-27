import React from 'react';

class PwdLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        };
        this.ChangeValue = this.ChangeValue.bind(this);
        this.ValidatePwd = this.ValidatePwd.bind(this);
    }

    ChangeValue(input) {
        this.setState({value: input.target.value})
    }

    ValidatePwd(input) {
        if (input.length > 0) {
            if (input.length < 8) {
                return (
                    <p>비밀번호는 8자 이상</p>
                );
            } else if ((input.match(/[a-z]/g) || []).length === 0) {
                return (
                    <p>영어도 포함시켜줘</p>
                );
            } else if ((input.match(/[0-9]/g) || []).length === 0) {
                return (
                    <p>숫자도 포함시켜줘</p>
                );
            }
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
                {this.ValidatePwd(this.state.value)}
            </div>
        );
    }
}

export default PwdLabel;