import React from 'react';

class IDLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        };
        this.ChangeValue = this.ChangeValue.bind(this);
        this.CheckID = this.CheckID.bind(this);
    }

    ChangeValue(input) {
        this.setState({value: input.target.value})
    }

    CheckID(input) {
        if (input === 'qnbz209') {
            return (
                <p>이미 있음</p>
            );
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        아이디 <input value={this.state.value} onChange={this.ChangeValue}/>
                    </label>
                </form>
                {this.CheckID(this.state.value)}
            </div>
        );
    }
}

export default IDLabel;