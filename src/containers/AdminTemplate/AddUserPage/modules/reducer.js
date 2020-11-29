import * as ActionType from "./constant"

let initialState = {
    data: null,
    err: null,
    loading: false
}


const AddUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_USER_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state }
        case ActionType.ADD_USER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.ADD_USER_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state }
        default:
            return { ...state };
    }
}

export default AddUserReducer
