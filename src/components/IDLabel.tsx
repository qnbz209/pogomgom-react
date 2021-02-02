import getFetchStatus from "../utils/GetFetchStatus";
import SIGNUP_URL from '../constants/Signup';
import { useCallback } from 'react';
import { IDInformation } from './Interfaces';

function IDLabel({ id, setStateWithKey } : IDInformation) {
    const changeID = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setStateWithKey('id', value);
        setStateWithKey('isIDValid', false);
    }, [setStateWithKey]);

    const validateID = useCallback(async () => {
        const requestOptions : RequestInit = {method: 'POST'};
        if (id.length === 0) {
            setStateWithKey('isIDValid', false);
        }
        else {
            const url : string = `${SIGNUP_URL}signup/id?id=${id}`;
            var status = (await getFetchStatus({ url, requestOptions })).status;
            if (status === 200) {
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