import { useState, useCallback } from 'react';
import renderMessageIfExist from '../utils/RenderMessage';

function PhoneLabel({ phone, setStateWithKey }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validatePhone = useCallback((input) => {
        if (input.length > 0) {
            if ((input.match(/[0-9]/g) || []).length === 0) {
                setErrorMessage('전화번호는 숫자로만 이루어져있어요');
                setStateWithKey('isPhoneValid', false);
            }
            else {
                setErrorMessage('');
                setStateWithKey('isPhoneValid', true);
            }
        }
        else {
            setErrorMessage('');
            setStateWithKey('isPhoneValid', false);
        }
    }, [setErrorMessage, setStateWithKey]);

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
            {renderMessageIfExist(errorMessage)}
        </div>
    );
}

export default PhoneLabel;