import React from 'react';
import { connect } from 'react-redux';
import Signup from '../pages/Signup';
import { changeInput } from '../modules/reducer';

const SignupContainer = ({
    id, pwd, name, phone, email, ad, changeInput
}) => {
    return (
        <Signup
            id = {id}
            pwd = {pwd}
            name = {name}
            phone = {phone}
            email = {email}
            ad = {ad}
            changeParentState = {changeInput}/>
    );
};

export default connect(
    state => ({
        id: state.reducer.id,
        pwd: state.reducer.pwd,
        name: state.reducer.name,
        phone: state.reducer.phone,
        email: state.reducer.email,
        ad: state.reducer.ad
    }),
    {
        changeInput,
    },
)(SignupContainer);