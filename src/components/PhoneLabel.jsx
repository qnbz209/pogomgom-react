import { useState } from 'react';
import renderMessageIfExist from '../utils/RenderMessage';

function PhoneLabel(props) {
    const [errmsg, setErrmsg] = useState('');

    function changePhone(event) {
        props.setStateWithKey('phone', event.target.value);
        validatePhone(event.target.value);
    }

    function validatePhone(input) {
        if (input.length > 0) {
            if ((input.match(/[0-9]/g) || []).length === 0) {
                setErrmsg('전화번호는 숫자로만 이루어져있어요');
                props.setStateWithKey('isPhoneValid', false);
            }
            else {
                setErrmsg('');
                props.setStateWithKey('isPhoneValid', true);
            }
        }
        else {
            setErrmsg('');
            props.setStateWithKey('isPhoneValid', false);
        }
    }

    return (
        <div>
            <label>
                전화번호 <input value={props.phone} onChange={changePhone} />
            </label>
            {renderMessageIfExist(errmsg)}
        </div>
    );
}

export default PhoneLabel;