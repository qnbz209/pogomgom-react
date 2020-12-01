import React from 'react';

class IDLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isValidate: false,
            errmsg: ''
        };
        this.changeID = this.changeID.bind(this);
        this.validateID = this.validateID.bind(this);
        this.renderErrmsg = this.renderErrmsg.bind(this);
    }

    changeID(event) {
        this.validateID();
        this.props.handleID(event.target.value);
    }

    validateID() {
        const input = this.props.id;

        if (input.length > 0) {
            if (input === 'qnbz209') {
                this.setState({
                    isValidate: false,
                    errmsg: '이미 존재하는 아이디에요'
                });
            }
            else {
                this.setState({
                    isValidate: true,
                    errmsg: ''
                });
            }
        }
        else {
            this.setState({
                isValidate: false,
                errmsg: '아이디를 입력해주세요'
            });
        }
    }

    renderErrmsg() {
        return <p>{this.state.errmsg}</p>;
    }

    render() {
        return (
            <div>
                <label>
                    아이디 <input value={this.props.id} onChange={this.changeID}/>
                </label>
                {this.renderErrmsg}
            </div>
        );
    }
}

export default IDLabel;