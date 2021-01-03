const CHANGE_INPUT = 'reducer/CHANGE_INPUT';

const initalState = {
    id: '',
    pwd: '',
    name: '',
    phone: '',
    email: '',
    ad: null
};

export const changeInput = (key, input) => ({type: CHANGE_INPUT, key, input});

function reducer(state = initalState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                [action.key]: action.input
            };
        default:
            return state;
    }
}

export default reducer;