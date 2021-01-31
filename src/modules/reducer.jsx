export const CHANGE_INPUT = 'reducer/CHANGE_INPUT';

const initialState = {
    id: '',
    name: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                id: action.input.id,
                name: action.input.name
            };
        default:
            return state;
    }
}

export default reducer;