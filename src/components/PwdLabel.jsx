import { useState, useCallback } from 'react';
import renderMessageIfExist from '../utils/RenderMessage';

function PwdLabel(props) {
    const [pwdErrmsg, setPwdErrmsg] = useState('');
    const [confirmErrmsg, setConfirmErrmsg] = useState('');
    const { pwd, setStateWithKey } = props;

    const validatePwd = useCallback((input) => {
        if (input.length > 0) {
            if (input.length < 8) {
                setPwdErrmsg('비밀번호는 8자 이상');
                setStateWithKey('isPwdValid', false);
            } else if ((input.match(/[a-z]/g) || []).length === 0) {
                setPwdErrmsg('영어도 포함시켜줘');
                setStateWithKey('isPwdValid', false);
            } else if ((input.match(/[0-9]/g) || []).length === 0) {
                setPwdErrmsg('숫자도 포함시켜줘');
                setStateWithKey('isPwdValid', false);
            }
            else {
                setPwdErrmsg('');
                setStateWithKey('isPwdValid', true);
            }
        }
        else {
            setPwdErrmsg('');
            setStateWithKey('isPwdValid', false);
        }
    }, [setPwdErrmsg, setStateWithKey]);

    const changePwd = useCallback((event) => {
        const value = event.target.value;
        setStateWithKey('pwd', value);
        validatePwd(value);
    }, [setStateWithKey, validatePwd]);

    const validateConfirm = useCallback((event) => {
        const input = event.target.value;
        if (input.length > 0) {
            if (input === pwd) {
                setConfirmErrmsg('');
                setStateWithKey('isConfirmValid', true);
            }
            else {
                setConfirmErrmsg('비밀번호랑 똑같이');
                setStateWithKey('isConfirmValid', false);
            }
        }
        else {
            setConfirmErrmsg('');
            setStateWithKey('isConfirmValid', false);
        }
    }, [pwd, setConfirmErrmsg, setStateWithKey]);

    return (
        <div>
            <div>
                <label>
                    비밀번호 <input type="password" value={pwd} onChange={changePwd} />
                </label>
                {renderMessageIfExist(pwdErrmsg)}
            </div>
            <div>
                <label>
                    비밀번호확인 <input type="password" onChange={validateConfirm} />
                </label>
                {renderMessageIfExist(confirmErrmsg)}
            </div>
        </div>
    );
}

export default PwdLabel;