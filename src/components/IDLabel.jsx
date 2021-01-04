import React from 'react';
import getFetchStatus from '../utils/GetFetchStatus';

class IDLabel extends React.Component {
    constructor(props) {
        super(props)
        this.changeID = this.changeID.bind(this);
        this.validateID = this.validateID.bind(this);
    }

    changeID(event) {
        const value = event.target.value;
        this.props.handleAppState('id', value);
        this.props.validate('isIDValid', false);
    }

    async validateID() {
        const value = this.props.id;
        const url = 'http://ec2-18-221-142-60.us-east-2.compute.amazonaws.com:3000/signup/id?id=' + value;
        const requestOptions = {method: 'POST'};

        if (value.length === 0) {
            this.props.validate('isIDValid', false);
        }
        else {
            if (await getFetchStatus(url, requestOptions) === 200) {
                this.props.validate('isIDValid', true);
                alert('사용 가능한 아이디입니다!');
            }
            else {
                this.props.validate('isIDValid', false);
                alert('이미 존재하는 아이디입니다!');
            }
        }
    }

    render() {
        return (
            <div>
                <label>
                    아이디 <input value={this.props.id} onChange={this.changeID}/>
                </label>
                <button onClick={this.validateID}>
                    중복확인
                </button>
            </div>
        );
    }
}

export default IDLabel;