// import { act } from "react-dom/test-utils";

/**
 * Reducer ko chịu data bị async 
 * =>dùng library redux-thunk or (redux saga) => xử lý được Middleware(action) bị bất đồng bộ
 */

import * as ActionType from "./constants"


let initialState = {
    loading: false,
    data: null,
    err: null,
}


const listMovieReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionType.LIST_MOVIE_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case ActionType.LIST_MOVIE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case ActionType.LIST_MOVIE_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };

        default: return { ...state }
            // break;
    }
}

export default listMovieReducer;