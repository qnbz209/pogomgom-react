import Signup from '../pages/Signup';
import { CHANGE_INPUT } from '../modules/reducer';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SuccessInformation } from '../components/Interfaces';

function SignupContainer() {
    const dispatch = useDispatch();

    const changeInput = useCallback((input : SuccessInformation) => {
        dispatch({type: CHANGE_INPUT, input})
    }, [dispatch]);

    return (
        <Signup
            changeInput = {changeInput}/>
    );
};

export default SignupContainer;