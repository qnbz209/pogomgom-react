import Signup from '../pages/Signup';
import { CHANGE_INPUT } from '../modules/reducer';
import { useDispatch } from 'react-redux';

function SignupContainer() {
    const dispatch = useDispatch();

    const changeInput = (input) => {
        dispatch({type: CHANGE_INPUT, input})};

    return (
        <Signup
            changeInput = {changeInput}/>
    );
};

export default SignupContainer;