import React from 'react';

class JoinButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            agree: false
        };
        this.ChangeState = this.ChangeState.bind(this)
        this.ShowState = this.ShowState.bind(this)
    }

    ChangeState() {
        this.setState(state => ({agree: !state.agree}));
    }

    ShowState() {
        return this.state.agree ? "고마워!" : "가입"
    }

    render() {
        return (
            <div>
                <button Click={this.ChangeState}>
                    {this.ShowState()}
                </button>
            </div>
        );
    }
}

export default JoinButton;