import Constant from './constant'
import { fetchList } from './service';
import { errorhandler } from '../../utils/error';


export const getListings = (filter = null) => async (dispatch) => {
    dispatch({
        type: Constant.FETCH_LIST,
    })


    try {
        
        const options = {
            start: Constant.DEFAULT_START,
            limit: Constant.DEFAULT_LIMIT,
            convert: 'USD',
            sort: filter
        }

        const networkResponse = await fetchList(options)
        const response = networkResponse.data

        dispatch({
            type: Constant.FETCH_SUCCESS,
            payload: {
                listings: response.data
            }
        })

    } catch (error) {
        errorhandler(error, message => {
            dispatch({
                type: Constant.FETCH_FAILED,
                payload: {
                    error: message
                }
            })
        })

    }

}