import React from 'react';

class NameLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        };
        this.ChangeValue = this.ChangeValue.bind(this);
    }

    ChangeValue(input) {
        this.setState({value: input.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        이름 <input value={this.state.value} onChange={this.ChangeValue}/>
                    </label>
                </form>
            </div>
        );
    }
}

export default NameLabel;