import React from 'react';

class JoinButton extends React.Component {
    constructor(props) {
        super(props)
        this.checkJoin = this.checkJoin.bind(this);
    }

    checkJoin() {
        if (!this.props.isIDValid || !this.props.isPwdValid ||
            !this.props.isConfirmValid || this.props.name === '' ||
            !this.props.isPhoneValid || !this.props.isEmailValid ||
            this.props.adAgree === null) {
            alert('위의 조건들을 다 만족시켜야해');
        }
        else {
            this.props.validate('allValid', true);
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