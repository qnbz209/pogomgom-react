import React from 'react';
import { connect } from 'react-redux';
import Success from '../pages/Success';

const SuccessContainer = ({
    id, name
}) => {
    return (
        <Success
            id = {id}
            name = {name} />
    );
};

export default connect(
    state => ({
        id: state.reducer.id,
        name: state.reducer.name,
    }),
)(SuccessContainer);