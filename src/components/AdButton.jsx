import React from 'react';

class AdButton extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                value: null 
            }
    }

    render() {
        return (
            <div>
                <p>광고동의</p>
                <div>
                    <input type="radio" value="true" name="ad" /> 동의함
                    <input type="radio" value="false" name="ad" /> 동의안함
                </div>
            </div>
        );
    }
}

export default AdButton;