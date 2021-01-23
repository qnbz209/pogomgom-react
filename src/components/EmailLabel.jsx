import { useCallback, useState } from 'react';
import renderMessageIfExist from '../utils/RenderMessage';

function EmailLabel(props) {
    const { email, setStateWithKey } = props;
    const [errmsg, setErrmsg] = useState('');

    const validateEmail = useCallback((input) => {
        if (input.length > 0) {
            if ((input.match(/@/) || []).length === 0) {
                setErrmsg('이메일 양식 맞춰주세요');
                setStateWithKey('isEmailValid', false);
            }
            else {
                setErrmsg('');
                setStateWithKey('isEmailValid', true);
            }
        }
        else {
            setErrmsg('');
            setStateWithKey('isEmailValid', false);
        }
    }, [setErrmsg, setStateWithKey]);

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
            {renderMessageIfExist(errmsg)}
        </div>
    );
}

export default EmailLabel;