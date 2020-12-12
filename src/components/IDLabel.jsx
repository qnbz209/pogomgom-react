import React from 'react';
import renderMessageIfExist from './RenderMessage';

class IDLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.changeID = this.changeID.bind(this);
        this.validateID = this.validateID.bind(this);
    }

    changeID(event) {
        this.props.handleState('id', event.target.value);
        this.validateID(event.target.value);
    }

    validateID(input) {
        if (input.length > 0) {
            if (input === 'qnbz209') {
                this.setState({
                    errmsg: '이미 존재하는 아이디에요'
                });
                this.props.validate('isIDValid', false);
            }
            else {
                this.setState({
                    errmsg: ''
                });
                this.props.validate('isIDValid', true);
            }
        }
        else {
            this.setState({
                errmsg: ''
            });
            this.props.validate('isIDValid', true);
        }
    }

    render() {
        return (
            <div>
                <label>
                    아이디 <input value={this.props.id} onChange={this.changeID}/>
                </label>
                {renderMessageIfExist(this.state.errmsg)}
            </div>
        );
    }
}

export default IDLabel;