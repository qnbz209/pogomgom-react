import React from 'react';

class IDLabel extends React.Component {
    constructor(props) {
        super(props);
        this.ChangeValue = this.ChangeValue.bind(this);
        this.CheckID = this.CheckID.bind(this);
    }


    CheckID(input) {
        if (input === 'qnbz209') {
            return (
                <p>이미 있음</p>
            );
        }
    }

    onChangeID(event) {
        this.props.handleID(event.target.value);
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        아이디 <input value={this.props.id} onChange={}/>
                    </label>
                </form>
                {this.CheckID(this.state.value)}
            </div>
        );
    }
}

export default IDLabel;