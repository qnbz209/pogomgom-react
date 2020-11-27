import React from 'react';

class EmailLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        };
        this.ChangeValue = this.ChangeValue.bind(this);
        this.ValidateEmail = this.ValidateEmail.bind(this);
    }

    ChangeValue(event) {
        this.setState({value: event.target.value})
    }

    ValidateEmail(input) {
        if (input.len > 0 && ((input.match(/[@]/) || []).length === 0)) {
            return (
                <p>이메일 양식 맞춰서</p>
            );
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        이메일 <input value={this.state.value} onChange={this.ChangeValue}/>
                    </label>
                </form>
                {this.ValidateEmail(this.state.value)}
            </div>
        );
    }
}

export default EmailLabel;