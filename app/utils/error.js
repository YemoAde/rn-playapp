export const errorhandler = (response, failCallback) => {
    if (response.response) {

        if (response.response.status === 401) {
            //function to trigger a redirect

            return failCallback('Attempt is unauthorized')
        }


        return failCallback(response.response.data.message)
    } else if (response.request) {

        //some optionale logic
        return failCallback(response.message)

    } else {

        //some optional logic
        return failCallback(response.message)
    }
}