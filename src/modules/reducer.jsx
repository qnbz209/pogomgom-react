const CHANGE_INPUT = 'reducer/CHANGE_INPUT';

const initalState = {
    id: '',
    name: ''
};

export const changeInput = (input) => ({type: CHANGE_INPUT, input});

function reducer(state = initalState, action) {
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