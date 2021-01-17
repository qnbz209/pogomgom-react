import Success from '../pages/Success';
import { connect } from 'react-redux';

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
        name: state.reducer.name
    }),
)(SuccessContainer);