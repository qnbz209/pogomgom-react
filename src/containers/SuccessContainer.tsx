import Success from '../pages/Success';
import { useSelector } from 'react-redux';
import { RootReducer } from '../modules/reducer';

function SuccessContainer() {
    const state = useSelector((state : RootReducer) => state.reducer);

    return (
        <Success
            id = {state.id}
            name = {state.name} />
    );
};

export default SuccessContainer;