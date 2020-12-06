import React from 'react';
import renderErrorMessage from './ErrorMessage.jsx';

class ReLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.changeRe = this.changeRe.bind(this);
        this.checkRe= this.checkRe.bind(this);
    }

    changeRe(event) {
        this.props.handleRe(event.target.value);
        this.checkRe(event.target.value);
    }

    checkRe(input) {
        if (input.length > 0) {
            if (input === this.props.pwd) {
                this.setState({
                    errmsg: ''
                });
                this.props.validateRe(true);
            }
            else {
                this.setState({
                    errmsg: '비밀번호가 달라요'
                });
                this.props.validateRe(false);
            }
        }
    }

    render() {
        return (
            <div>
                <label>
                    비밀번호확인 <input type="password" value={this.props.re} onChange={this.changeRe} />
                </label>
                {renderErrorMessage(this.state.errmsg)}
            </div>
        );
    }
}

export default ReLabel;