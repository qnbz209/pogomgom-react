import React from 'react';
import postData from './PostData';

class JoinButton extends React.Component {
    constructor(props) {
        super(props);
        this.checkJoin = this.checkJoin.bind(this);
    }

    async checkJoin() {
        if (!this.props.valid) {
            alert('위의 조건들을 다 만족시켜야해');
        }
        else {
            var status = await postData('/signup', this.props.requestOptions);

            if (status === 200)
                this.props.validate('fetchSuccess', true);
            else if (status === 500)
                alert('Error while signup');
            else
                alert('회원가입 폼에 없는 항목이 있습니다.');
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.checkJoin}>
                    가입
                </button>
            </div>
        );
    }
}

export default JoinButton;