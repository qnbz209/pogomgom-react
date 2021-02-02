export const CHANGE_INPUT : string = 'reducer/CHANGE_INPUT';

const initialState = {
    id: '',
    name: ''
};

interface actionInputType {
    id : string,
    name : string
};

export interface RootState {
    reducer: actionInputType
};

interface actionType {
    type : string,
    input : actionInputType
};

function reducer(state : actionInputType = initialState, action : actionType) {
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