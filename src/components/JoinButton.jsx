import React from 'react';

class JoinButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.checkJoin = this.checkJoin.bind(this);
    }

    checkJoin(input) {
        if (!this.props.idValid || !this.props.pwdValid || !this.props.reValid ||
            this.props.name === '' || !this.props.phoneValid ||
            !this.props.emailValid || this.props.ad === null) {
            alert('위의 조건들을 다 만족시켜야해');
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.checkJoin}>
                    가입
                </button>
            </div>
        );
    }
}

export default JoinButton;