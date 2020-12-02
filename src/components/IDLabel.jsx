import React from 'react';

class IDLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errmsg: ''
        };
        this.changeID = this.changeID.bind(this);
        this.checkID= this.checkID.bind(this);
        this.renderErrmsg = this.renderErrmsg.bind(this);
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
    }

    renderErrmsg() {
        if (this.state.errmsg === '') {
            return;
        }
        else {
            return <p>{this.state.errmsg}</p>;
        }
    }

    render() {
        return (
            <div>
                <label>
                    아이디 <input value={this.props.id} onChange={this.changeID}/>
                </label>
                {this.renderErrmsg()}
            </div>
        );
    }
}

export default IDLabel;