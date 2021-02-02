import getFetchStatus from "../utils/GetFetchStatus";
import SIGNUP_URL from '../constants/Signup';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { JoinInformation } from './Interfaces';

function JoinButton({ requestOptions, signup, id, name, valid } : JoinInformation) {
    let history = useHistory();
    
    const checkJoin = useCallback(async () => {
        if (!valid) {
            alert('위의 조건들을 다 만족시켜야해');
        }
        else {
            const url : string = SIGNUP_URL + 'signup';
            var status = (await getFetchStatus({ url, requestOptions })).status;

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

export default JoinButton;