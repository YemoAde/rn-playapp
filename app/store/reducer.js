import { combineReducers } from 'redux'
import Listing from '../components/Listings/reducer'

export default combineReducers({
    listings: Listing
})