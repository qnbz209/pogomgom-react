import getFetchStatus from '../utils/GetFetchStatus';
import { useHistory, withRouter } from 'react-router-dom';
import SIGNUP_URL from '../constants/Signup';
import { useCallback } from 'react';

function JoinButton(props) {
    const { requestOptions, signup, id, name, valid } = props;
    let history = useHistory();
    
    const checkJoin = useCallback(async () => {
        if (!valid) {
            alert('위의 조건들을 다 만족시켜야해');
        }
        else {
            var status = await getFetchStatus(SIGNUP_URL + 'signup', requestOptions);

            if (status === 200) {
                signup({id: id, name: name});
                history.push('/success');
            }
            else if (status === 500) {
                alert('Error while signup');
            }
            else {
                alert('회원가입 폼에 없는 항목이 있습니다.');
            }
        }
    }, [requestOptions, signup, id, name, valid, history])

    return (
        <div>
            <button onClick={checkJoin}>
                가입
            </button>
        </div>
    );
}

export default withRouter(JoinButton);