import * as actionType from './constant'

let initialState = {
    data: null,
    err: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_REQUEST:
            state.err = null;
            state.data = null;
            state.loading = true;
            return { ...state };
        case actionType.AUTH_SUCCESS:
            state.err = null;
            state.data = action.payload;
            state.loading = false;
            return { ...state };
        case actionType.AUTH_FAILED:
            state.err = action.payload;
            state.data = null;
            state.loading = false;
            return { ...state };
        case actionType.AUTH_CLEARDATA:
            state.err = null;
            state.data = null;
            state.loading = false;
            return { ...state };
            // break;
        default:
            return { ...state };
    }
}

export default authReducer;

