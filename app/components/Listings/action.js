import Constant from './constant'
import { fetchList } from './service';
import { errorhandler } from '../../utils/error';


export const getListings = () => async dispatch => {
    dispatch({
        type: Constant.FETCH_LIST
    })


    try {

        const options = {
            start: Constant.DEFAULT_START,
            limit: Constant.DEFAULT_LIMIT,
            convert: 'USD',
            sort: 'market_cap'
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

        console.log(error)
        errorhandler(error, (message) => {
            console.log(message)
            dispatch({
                type: Constant.FETCH_FAILED,
                payload: {
                    error: message
                }
            })
        })

    }

}