import * as ActionType from "./constant"
import api from "./../../../../api"
 import setHeaders from "./.././../../../utils/setHeaders"

// import { Redirect } from "react-router-dom";
const TIME_OUT = 3600000;

export const actAuthApi = (user, history) => {
    return dispatch => {
        dispatch(actAuthRequest());
        api.post("/QuanLyNguoiDung/DangNhap", user)
            .then((rs) => {
                // console.log(rs.data)
                dispatch(actAuthSuccess(rs.data));
                if (rs.data.maLoaiNguoiDung === "QuanTri") {
                    //setHeader
                    setHeaders(rs.data.accessToken)
                    //lưu trạng thái login
                    localStorage.setItem("UserAdmin", JSON.stringify(rs.data));
                    // Redirect qua trang dashboard
                    history.replace("/dashboard");

                    //tạo thời gian hết phiên
                    //hàm getTime quy ra con số trước khi convert sang giờ thật
                    const date = new Date().getTime();
                    const exp = date + TIME_OUT; // vd +1h hết phiên tính = miliS
                    // console.log(date);
                    // console.log(exp);
                    localStorage.setItem("exp", exp);
                    const expTimeout = exp - date;
                    dispatch(setTimeOutLogout(history, expTimeout));// khi login thành công, hàm bắt đầu chạy
                } else {
                    return Promise.reject({
                        response: { data: "Bạn không có quyền truy cập" },  //custom text err từ err.response.data
                    })
                }
            })
            .catch((err) => {
                dispatch(actAuthFailed(err))
            })
    }
}

export const actLogout = (history) => {
    localStorage.removeItem("UserAdmin");
    localStorage.removeItem("exp");
    history.replace("/auth");
    return {
        type: ActionType.AUTH_CLEARDATA,
    }
}

/**
 * hàm này gọi đến action Logout
 */
const setTimeOutLogout = (history, expTimeout) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(actLogout(history));
        }, expTimeout)
    } // 10000= 10s , tham số này là thời gian set cho timeout
}

export const actTryLogin = (history) => {

    return dispatch => {
        if (!localStorage.getItem("UserAdmin")) {
            return
        }
        const exp = localStorage.getItem("exp");
        const date = new Date().getTime();
        if (date > exp) {
            dispatch(actLogout(history))
            return;
        }else {
            const user = JSON.parse(localStorage.getItem("UserAdmin"));
            setHeaders(user.accessToken);
            dispatch(actAuthSuccess(user));
        }
    }
}

const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST
    }
}

const actAuthSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data
    }
}

const actAuthFailed = (data) => {
    return {
        type: ActionType.AUTH_FAILED,
        payload: data
    }
}