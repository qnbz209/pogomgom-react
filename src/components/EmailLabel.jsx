import { useCallback, useState } from 'react';
import renderMessageIfExist from '../utils/RenderMessage';

function EmailLabel({ email, setStateWithKey }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = useCallback((input) => {
        if (input.length > 0) {
            if ((input.match(/@/) || []).length === 0) {
                setErrorMessage('이메일 양식 맞춰주세요');
                setStateWithKey('isEmailValid', false);
            }
            else {
                setErrorMessage('');
                setStateWithKey('isEmailValid', true);
            }
        }
        else {
            setErrorMessage('');
            setStateWithKey('isEmailValid', false);
        }
    }, [setErrorMessage, setStateWithKey]);

    const changeEmail = useCallback((event) => {
        const value = event.target.value;
        setStateWithKey('email', value);
        validateEmail(value);
    }, [setStateWithKey, validateEmail]);
    
    return (
        <div>
            <label>
                이메일 <input value={email} onChange={changeEmail} />
            </label>
            {renderMessageIfExist(errorMessage)}
        </div>
    );
}

export default EmailLabel;