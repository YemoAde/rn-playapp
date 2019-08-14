import axios from 'axios'


/**
 * @note
 * In Production environment 
 * Move API key and baseUrl to Environment file (.env)
 */

export default Api = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
    headers: {
        'X-CMC_PRO_API_KEY': 'df8d2668-9ee2-45af-b462-19b4fb0d779a'
    }
})