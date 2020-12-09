import api from "../../api/index"

const setHeader = (token) => {
    if (token){
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
};

export default setHeader