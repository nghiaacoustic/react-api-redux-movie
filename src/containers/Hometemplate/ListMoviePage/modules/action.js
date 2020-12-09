import * as ActionType from "./constants";
// import Axios from "axios";
import api from "./../../../../api";

export const actListMovieApi = () => {
    return dispatch => {
        dispatch(actListMovieRequest());
        // Axios({
        //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        //     method: "GET",
        // })
        api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                dispatch(actListMovieSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actListMovieFailed(error));
            })
    }
}

const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST,
    };
};

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    };
};
const actListMovieFailed = (err) => {
    return {
        type: ActionType.LIST_MOVIE_FAILED,
        payload: err,
    };
};