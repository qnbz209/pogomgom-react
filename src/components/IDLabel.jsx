import React from 'react';
import renderErrorMessage from './ErrorMessage.jsx';

class IDLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.changeID = this.changeID.bind(this);
        this.checkID= this.checkID.bind(this);
    }

    changeID(event) {
        this.props.handleID(event.target.value);
        this.checkID(event.target.value);
    }

    checkID(input) {
        if (input.length > 0) {
            if (input === 'qnbz209') {
                this.setState({
                    errmsg: '이미 존재하는 아이디에요'
                });
                this.props.validateID(false);
            }
            else {
                this.setState({
                    errmsg: ''
                });
                this.props.validateID(true);
            }
        }
        else {
            this.setState({
                errmsg: ''
            });
            this.props.validateID(false);
        }
    }

    render() {
        return (
            <div>
                <label>
                    아이디 <input value={this.props.id} onChange={this.changeID}/>
                </label>
                {renderErrorMessage(this.state.errmsg)}
            </div>
        );
    }
}

export default IDLabel;