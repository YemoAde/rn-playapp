import api from "../../utils/api";

export const fetchList = async (options) =>
    api.get('/listings/latest', {
        params: {
            ...options
        }
    })