import React from 'react';

class NameLabel extends React.Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
    }

    changeName(event) {
        this.props.handleState('name', event.target.value);
    }

    render() {
        return (
            <div>
                <label>
                    이름 <input value={this.props.name} onChange={this.changeName} />
                </label>
            </div>
        );
    }
}

export default NameLabel;