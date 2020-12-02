import React from 'react';

class EmailLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.checkEmail= this.checkEmail.bind(this);
        this.renderErrmsg = this.renderErrmsg.bind(this);
    }

    changeEmail(event) {
        this.props.handleEmail(event.target.value);
        this.checkEmail(event.target.value);
    }

    checkEmail(input) {
        if (input.length > 0) {
            if ((input.match(/@/) || []).length === 0) {
                this.setState({
                    errmsg: '이메일 양식 맞춰주세요'
                });
                this.props.validateEmail(false);
            }
            else {
                this.setState({
                    errmsg: ''
                });
                this.props.validateEmail(true);
            }
        }
    }

    renderErrmsg() {
        if (this.state.errmsg === '') {
            return;
        }
        else {
            return <p>{this.state.errmsg}</p>;
        }
    }
    render() {
        return (
            <div>
                <label>
                    이메일 <input value={this.props.email} onChange={this.changeEmail} />
                </label>
                {this.renderErrmsg()}
            </div>
        );
    }
}

export default EmailLabel;