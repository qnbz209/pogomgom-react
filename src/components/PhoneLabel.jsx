import React from 'react';

class PhoneLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.changePhone = this.changePhone.bind(this);
        this.checkPhone= this.checkPhone.bind(this);
        this.renderErrmsg = this.renderErrmsg.bind(this);
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
                    전화번호 <input value={this.props.phone} onChange={this.changePhone} />
                </label>
                {this.renderErrmsg()}
            </div>
        );
    }
}

export default PhoneLabel;