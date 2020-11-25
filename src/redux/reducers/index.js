import {combineReducers} from "redux"
import listMovieReducer from "./../../containers/Hometemplate/ListMoviePage/modules/reducer"
import detailMovieReducer from "./../../containers/Hometemplate/DetailMovie/modules/reducer"

const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer, //key value
});

export default rootReducer;