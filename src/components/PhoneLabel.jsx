import React from 'react';

class PhoneLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        };
        this.ChangeValue = this.ChangeValue.bind(this);
        this.ValidatePhone = this.ValidatePhone.bind(this);
    }

    ChangeValue(input) {
        this.setState({value: input.target.value})
    }

    ValidatePhone(input) {
        if (input.length > 0) {
            if ((input.match(/[0-9]/g) || []).length === 0) {
                return (
                    <p>전화번호는 숫자로만 이루어져있어요</p>
                )
            }
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        전화번호 <input value={this.state.value} onChange={this.ChangeValue}/>
                    </label>
                </form>
                {this.ValidatePhone(this.state.value)}
            </div>
        );
    }
}

export default PhoneLabel;