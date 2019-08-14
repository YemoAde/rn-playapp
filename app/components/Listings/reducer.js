import constant from "./constant";

const init = {
    listings: [],
    error: null,
    loading: false
}

export default (state = init, action) => {
    switch (action.type) {

        case constant.FETCH_LIST:
            return { ...state, loading: true, error: null }

        case constant.FETCH_SUCCESS:
            return { loading: false, listings: action.payload.listings, error: null }

        case constant.FETCH_FAILED:
            return { loading: false, error: action.payload.error, ...state }
        default:
            return state
    }
}