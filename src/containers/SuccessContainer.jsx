import Success from '../pages/Success';
import { useSelector } from 'react-redux';

function SuccessContainer() {
    const state = useSelector((state) => state.reducer);

    return (
        <Success
            id = {state.id}
            name = {state.name} />
    );
};

export default SuccessContainer;