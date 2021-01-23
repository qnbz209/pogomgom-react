import getFetchStatus from '../utils/GetFetchStatus';
import SIGNUP_URL from '../constants/Signup';
import { useCallback } from 'react';

function IDLabel(props) {
    const { id, setStateWithKey } = props;

    const changeID = useCallback((event) => {
        const value = event.target.value;
        setStateWithKey('id', value);
        setStateWithKey('isIDValid', false);
    }, [setStateWithKey]);

    const validateID = useCallback(async () => {
        const requestOptions = {method: 'POST'};

        if (id.length === 0) {
            setStateWithKey('isIDValid', false);
        }
        else {
            if (await getFetchStatus(SIGNUP_URL + 'signup/id?id=' + id, requestOptions) === 200) {
                setStateWithKey('isIDValid', true);
                alert('사용 가능한 아이디입니다!');
            }
            else {
                setStateWithKey('isIDValid', false);
                alert('이미 존재하는 아이디입니다!');
            }
        }
    }, [id, setStateWithKey])

    return (
        <div>
            <label>
                아이디 <input value={id} onChange={changeID} />
            </label>
            <button onClick={validateID}>
                중복확인
                </button>
        </div>
    );
}

export default IDLabel;