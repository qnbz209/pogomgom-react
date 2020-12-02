import React from 'react';

class JoinButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.checkJoin = this.checkJoin.bind(this);
        this.renderErrmsg = this.renderErrmsg.bind(this);
    }

    checkJoin(input) {
        if (!this.props.idValid || !this.props.pwdValid ||
            !this.props.reValid || !this.props.phoneValid ||
            !this.props.emailValid || this.props.ad === null) {
            this.setState({
                errmsg: '위의 조건들을 다 만족시켜야해'
            });
        }
        else {
            this.setState({
                errmsg: ''
            });
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
                <button onClick={this.checkJoin}>
                    가입
                </button>
                {this.renderErrmsg()}
            </div>
        );
    }
}

export default JoinButton;