import React from 'react';
import { connect } from 'react-redux';
import Signup from '../pages/Signup';
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