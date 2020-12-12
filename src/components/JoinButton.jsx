import React from 'react';

class JoinButton extends React.Component {
    constructor(props) {
        super(props)
        this.checkJoin = this.checkJoin.bind(this);
    }

    checkJoin() {
        if (!this.props.valid) {
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