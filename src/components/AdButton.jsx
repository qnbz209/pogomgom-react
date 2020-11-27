import React from 'react';

class AdButton extends React.Component {
    render() {
        return (
            <div>
                <p>광고동의</p>
                <div onChange={this.onChangeValue}>
                    <input type="radio" value="agree" name="ad" /> 동의함
                    <input type="radio" value="disagree" name="ad" /> 동의안함
                </div>
            </div>
        );
    }
}

export default AdButton;