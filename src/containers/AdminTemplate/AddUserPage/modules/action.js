import * as ActionType from "./constant"
import api from "./../../../../api"

export const actAddUserApi= (user) => {

    let accessToken = "";
    if(localStorage.getItem("UserAdmin")){
        console.log(accessToken)
        accessToken=JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }

    return dispatch => {
        dispatch(actAddUserRequest());
        api.post("/QuanLyNguoiDung/ThemNguoiDung", user)
        .then((rs)=>{
            dispatch(actAddUserSuccess(rs.data));

        })
        .catch((err)=>{
            dispatch(actAddUserFailed(err));
        })

    }
}

const actAddUserRequest = () => {
    return {
        type:ActionType.ADD_USER_REQUEST
    }
}

const actAddUserSuccess = (data) => {
    return {
        type: ActionType.ADD_USER_SUCCESS,
        payload:data
    }
}

const actAddUserFailed = (data) => {
    return {
        type: ActionType.ADD_USER_FAILED,
        payload: data
    }
}