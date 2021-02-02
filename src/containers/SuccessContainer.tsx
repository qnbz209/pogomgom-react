import Success from '../pages/Success';
import { useSelector } from 'react-redux';
import { RootState } from '../modules/reducer';

function SuccessContainer() {
    const state = useSelector((state : RootState) => state.reducer);

    return (
        <Success
            id = {state.id}
            name = {state.name} />
    );
};

export default SuccessContainer;