import { useState } from 'react';
import IDLabel from '../components/IDLabel';
import PwdLabel from '../components/PwdLabel';
import NameLabel from '../components/NameLabel';
import PhoneLabel from '../components/PhoneLabel';
import EmailLabel from '../components/EmailLabel';
import AdButton from '../components/AdButton';
import JoinButton from '../components/JoinButton';

function Signup(props) {
    const [id, setID] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [ad, setAd] = useState('');
    const [isIDValid, setIsIDValid] = useState(false);
    const [isPwdValid, setIsPwdValid] = useState(false);
    const [isConfirmValid, setIsConfirmValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const isNameValid = (name !== '');
    const isAdValid = (ad !== '');
    const isAllValid = (isIDValid && isPwdValid && isConfirmValid && isPhoneValid && isEmailValid && isAdValid && isNameValid);

    function setStateWithKey(key, value) {
        switch (key) {
            case 'id':
                setID(value);
                break;
            case 'pwd':
                setPwd(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'ad':
                setAd(value);
                break;
            case 'isIDValid':
                setIsIDValid(value);
                break;
            case 'isPwdValid':
                setIsPwdValid(value);
                break;
            case 'isConfirmValid':
                setIsConfirmValid(value);
                break;
            case 'isPhoneValid':
                setIsPhoneValid(value);
                break;
            case 'isEmailValid':
                setIsEmailValid(value);
                break;
            default:
                break;
        }
    }

    var requestBody = JSON.stringify({
        id: id,
        password: pwd,
        name: name,
        phoneAddress: phone,
        emailAddress: email,
        advertisement: ad
    });

    const requestOptions = {
        method: 'POST',
        body: requestBody,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    return (
        <div>
            <IDLabel
                id={id}
                setStateWithKey={setStateWithKey} />
            <PwdLabel
                pwd={pwd}
                setStateWithKey={setStateWithKey} />
            <NameLabel
                name={name}
                setStateWithKey={setStateWithKey} />
            <PhoneLabel
                phone={phone}
                setStateWithKey={setStateWithKey} />
            <EmailLabel
                email={email}
                setStateWithKey={setStateWithKey} />
            <AdButton
                setStateWithKey={setStateWithKey} />
            <JoinButton
                requestOptions={requestOptions}
                valid={isAllValid}
                id={id}
                name={name}
                signup={props.changeInput} />
        </div>
    )
}

export default Signup;