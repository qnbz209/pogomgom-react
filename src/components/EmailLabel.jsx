import { useState } from 'react';
import renderMessageIfExist from '../utils/RenderMessage';

function EmailLabel(props) {
    const [errmsg, setErrmsg] = useState('');

    function changeEmail(event) {
        const value = event.target.value;
        props.setStateWithKey('email', value);
        validateEmail(value);
    }

    function validateEmail(input) {
        if (input.length > 0) {
            if ((input.match(/@/) || []).length === 0) {
                setErrmsg('이메일 양식 맞춰주세요');
                props.setStateWithKey('isEmailValid', false);
            }
            else {
                setErrmsg('');
                props.setStateWithKey('isEmailValid', true);
            }
        }
        else {
            setErrmsg('');
            props.setStateWithKey('isEmailValid', false);
        }
    }
    
    return (
        <div>
            <label>
                이메일 <input value={props.email} onChange={changeEmail} />
            </label>
            {renderMessageIfExist(errmsg)}
        </div>
    );
}

export default EmailLabel;