import React from 'react';

class AdButton extends React.Component {
    constructor(props) {
        super(props);
        this.changeAd = this.changeAd.bind(this);
    }

    changeAd(event) {
        const value = event.target.value;
        this.props.validate('adAgree', value === "true"
                                     ? true : ((value === "false")
                                     ? false : null));
    }

    render() {
        return (
            <div>
                <div>
                    광고동의
                    <input type="radio" value="true" name="ad" onClick={this.changeAd}/> 동의함
                    <input type="radio" value="false" name="ad" onClick={this.changeAd}/> 동의안함
                </div>
            </div>
        );
    }
}

export default AdButton;