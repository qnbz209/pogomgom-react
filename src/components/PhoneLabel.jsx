import { useState, useCallback } from 'react';
import renderMessageIfExist from '../utils/RenderMessage';

function PhoneLabel(props) {
    const [errmsg, setErrmsg] = useState('');
    const { phone, setStateWithKey } = props;

    const validatePhone = useCallback((input) => {
        if (input.length > 0) {
            if ((input.match(/[0-9]/g) || []).length === 0) {
                setErrmsg('전화번호는 숫자로만 이루어져있어요');
                setStateWithKey('isPhoneValid', false);
            }
            else {
                setErrmsg('');
                setStateWithKey('isPhoneValid', true);
            }
        }
        else {
            setErrmsg('');
            setStateWithKey('isPhoneValid', false);
        }
    }, [setErrmsg, setStateWithKey]);

    const changePhone = useCallback((event) => {
        const value = event.target.value;
        setStateWithKey('phone', value);
        validatePhone(value);
    }, [setStateWithKey, validatePhone]);

    return (
        <div>
            <label>
                전화번호 <input value={phone} onChange={changePhone} />
            </label>
            {renderMessageIfExist(errmsg)}
        </div>
    );
}

export default PhoneLabel;