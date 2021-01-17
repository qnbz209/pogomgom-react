import Signup from '../pages/Signup';
import { connect } from 'react-redux';
import { changeInput } from '../modules/reducer';

const SignupContainer = ({
    changeInput
}) => {
    return (
        <Signup
            changeInput = {changeInput}/>
    );
};

export default connect(
    state => ({
        id: state.reducer.id,
        name: state.reducer.name
    }),
    {
        changeInput,
    },
)(SignupContainer);