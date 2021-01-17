import getFetchStatus from '../utils/GetFetchStatus';
import SIGNUP_URL from '../constants/Signup';

function IDLabel(props) {
    function changeID(event) {
        const value = event.target.value;
        props.setStateWithKey('id', value);
        props.setStateWithKey('isIDValid', false);
    }

    async function validateID() {
        const value = props.id;
        const requestOptions = {method: 'POST'};

        if (value.length === 0) {
            props.setStateWithKey('isIDValid', false);
        }
        else {
            if (await getFetchStatus(SIGNUP_URL + 'signup/id?id=' + value, requestOptions) === 200) {
                props.setStateWithKey('isIDValid', true);
                alert('사용 가능한 아이디입니다!');
            }
            else {
                props.setStateWithKey('isIDValid', false);
                alert('이미 존재하는 아이디입니다!');
            }
        }
    }

    return (
        <div>
            <label>
                아이디 <input value={props.id} onChange={changeID} />
            </label>
            <button onClick={validateID}>
                중복확인
                </button>
        </div>
    );
}

export default IDLabel;