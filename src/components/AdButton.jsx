import React from 'react';

class AdButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value})
    }
    
    render() {
        return (
            <div>
                <p>광고동의</p>
                <div>
                    <input type="radio" checked={this.state.value === "true"} value={true} name="ad" onChange={this.onChange}/> 동의함
                    <input type="radio" checked={this.state.value === "false"} value={false} name="ad" onChange={this.onChange}/> 동의안함
                </div>
            </div>
        );
    }
}

export default AdButton;