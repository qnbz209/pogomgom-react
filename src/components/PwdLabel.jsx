import { useState, useCallback } from 'react';
import renderMessageIfExist from '../utils/RenderMessage';

function PwdLabel({ pwd, setStateWithKey }) {
    const [pwdErrorMessage, setPwdErrorMessage] = useState('');
    const [confirmErrorMessage, setConfirmErrorMessage] = useState('');

    const validatePwd = useCallback((input) => {
        if (input.length > 0) {
            if (input.length < 8) {
                setPwdErrorMessage('비밀번호는 8자 이상');
                setStateWithKey('isPwdValid', false);
            } else if ((input.match(/[a-z]/g) || []).length === 0) {
                setPwdErrorMessage('영어도 포함시켜줘');
                setStateWithKey('isPwdValid', false);
            } else if ((input.match(/[0-9]/g) || []).length === 0) {
                setPwdErrorMessage('숫자도 포함시켜줘');
                setStateWithKey('isPwdValid', false);
            }
            else {
                setPwdErrorMessage('');
                setStateWithKey('isPwdValid', true);
            }
        }
        else {
            setPwdErrorMessage('');
            setStateWithKey('isPwdValid', false);
        }
    }, [setPwdErrorMessage, setStateWithKey]);

    const changePwd = useCallback((event) => {
        const value = event.target.value;
        setStateWithKey('pwd', value);
        validatePwd(value);
    }, [setStateWithKey, validatePwd]);

    const validateConfirm = useCallback((event) => {
        const input = event.target.value;
        if (input.length > 0) {
            if (input === pwd) {
                setConfirmErrorMessage('');
                setStateWithKey('isConfirmValid', true);
            }
            else {
                setConfirmErrorMessage('비밀번호랑 똑같이');
                setStateWithKey('isConfirmValid', false);
            }
        }
        else {
            setConfirmErrorMessage('');
            setStateWithKey('isConfirmValid', false);
        }
    }, [pwd, setConfirmErrorMessage, setStateWithKey]);

    return (
        <div>
            <div>
                <label>
                    비밀번호 <input type="password" value={pwd} onChange={changePwd} />
                </label>
                {renderMessageIfExist(pwdErrorMessage)}
            </div>
            <div>
                <label>
                    비밀번호확인 <input type="password" onChange={validateConfirm} />
                </label>
                {renderMessageIfExist(confirmErrorMessage)}
            </div>
        </div>
    );
}

export default PwdLabel;