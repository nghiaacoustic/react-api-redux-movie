import * as ActionType from "./constants";
// import Axios from "axios";
import api from "./../../../../api"


export const actDetailMovieApi = (id) => {
    return dispatch => {
        dispatch(actDetailMovieRequest());
        // Axios({
        //     url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        //     method: "GET",
        // })
        api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                dispatch(actDetailMovieSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actDetailMovieFailed(error));
            })
    }
}

const actDetailMovieRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST
    }
}

const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data
    }
}

const actDetailMovieFailed = (err) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAILED,
        payload: err
    }
}
