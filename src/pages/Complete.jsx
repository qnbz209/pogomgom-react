import React from 'react';

class Complete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    render() {
        return (
            <div>
                <div>
                    가입 감사합니다! {this.props.name}님!
                </div>
                <div>
                    {this.props.id}로
                    {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}에 가입되었어요!
                </div>
            </div>
        )
    }
}

export default Complete;