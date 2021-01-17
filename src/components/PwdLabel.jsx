import { useState} from 'react';
import renderMessageIfExist from '../utils/RenderMessage';

function PwdLabel(props) {
    const [pwdErrmsg, setPwdErrmsg] = useState('');
    const [confirmErrmsg, setConfirmErrmsg] = useState('');

    function changePwd(event) {
        const value = event.target.value;
        props.setStateWithKey('pwd', value);
        validatePwd(value);
    }

    function validatePwd(input) {
        if (input.length > 0) {
            if (input.length < 8) {
                setPwdErrmsg('비밀번호는 8자 이상');
                props.setStateWithKey('isPwdValid', false);
            } else if ((input.match(/[a-z]/g) || []).length === 0) {
                setPwdErrmsg('영어도 포함시켜줘');
                props.setStateWithKey('isPwdValid', false);
            } else if ((input.match(/[0-9]/g) || []).length === 0) {
                setPwdErrmsg('숫자도 포함시켜줘');
                props.setStateWithKey('isPwdValid', false);
            }
            else {
                setPwdErrmsg('');
                props.setStateWithKey('isPwdValid', true);
            }
        }
        else {
            setPwdErrmsg('');
            props.setStateWithKey('isPwdValid', false);
        }
    }

    function validateConfirm(event) {
        const input = event.target.value;
        if (input.length > 0) {
            if (input === props.pwd) {
                setConfirmErrmsg('');
                props.setStateWithKey('isConfirmValid', true);
            }
            else {
                setConfirmErrmsg('비밀번호랑 똑같이');
                props.setStateWithKey('isConfirmValid', false);
            }
        }
        else {
            setConfirmErrmsg('');
            props.setStateWithKey('isConfirmValid', false);
        }
    }

    return (
        <div>
            <div>
                <label>
                    비밀번호 <input type="password" value={props.pwd} onChange={changePwd} />
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