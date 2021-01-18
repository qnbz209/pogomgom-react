import React from 'react';
import getFetchStatus from '../utils/GetFetchStatus';
import SIGNUP_URL from '../constants/Signup';

class IDLabel extends React.Component {
    constructor(props) {
        super(props)
        this.changeID = this.changeID.bind(this);
        this.validateID = this.validateID.bind(this);
    }

    changeID(event) {
        const value = event.target.value;
        this.props.setStateWithKey('id', value);
        this.props.setStateWithKey('isIDValid', false);
    }

    async validateID() {
        const value = this.props.id;
        const requestOptions = {method: 'POST'};

        if (value.length === 0) {
            this.props.setStateWithKey('isIDValid', false);
        }
        else {
            if (await getFetchStatus(SIGNUP_URL + 'signup/id?id=' + value, requestOptions) === 200) {
                this.props.setStateWithKey('isIDValid', true);
                alert('사용 가능한 아이디입니다!');
            }
            else {
                this.props.setStateWithKey('isIDValid', false);
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