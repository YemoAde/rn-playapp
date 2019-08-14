import constant from "./constant";

const init = {
    listings: [],
    error: null,
    loading: false,
}

export default (state = init, action) => {
    switch (action.type) {

        case constant.FETCH_LIST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case constant.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                listings: action.payload.listings,
                error: null
            }

        case constant.FETCH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }

        default:
            return state
    }
}