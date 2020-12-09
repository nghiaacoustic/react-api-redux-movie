import {combineReducers} from "redux"
import listMovieReducer from "./../../containers/Hometemplate/ListMoviePage/modules/reducer"
import detailMovieReducer from "./../../containers/Hometemplate/DetailMovie/modules/reducer"
import authReducer from "./../../containers/AdminTemplate/AuthPage/modules/reducer"
import AddUserReducer from "./../../containers/AdminTemplate/AddUserPage/modules/reducer"

const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer, //key value
    authReducer,
    AddUserReducer,
});

export default rootReducer;