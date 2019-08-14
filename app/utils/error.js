export const errorhandler = (response, failCallback) => {
    console.log(response)
    if (response.response) {

        if (response.response.status === 401) {
            //function to trigger a redirect

            failCallback('Attempt is unauthorized')
        }


        failCallback(response.response.data.message)
    } else if (response.request) {

        //some optionale logic
        failCallback(response.message)

    } else {

        //some optional logic
        failCallback(response.message)
    }
}