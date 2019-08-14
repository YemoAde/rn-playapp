import { StyleSheet } from 'react-native'
import colors from '../../../assets/styles/colors';
import constants from '../../../assets/styles/constants';


export default StyleSheet.create({
    container: {
        width: '100%',
        padding: 24,
        borderRadius: 4,
        backgroundColor: colors.white,

        height: '30%',
        marginTop: 10,
        marginBottom: 5,
        marginRight: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
        elevation: 4,

        flex: 1,
        flexDirection: 'column',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },

    up: {
        color: colors.green,
        fontSize: 12,
        fontFamily: constants.font
    },

    down: {
        color: colors.red,
        fontSize: 12,
        fontFamily: constants.font
    },

    headertext: {
        fontSize: 22,
        color: colors.blue,
        fontWeight: '500',
        fontFamily: constants.font,
        maxWidth: '50%',
    },


    smalltext: {
        fontSize: 14,
        marginBottom: 5,
        color: colors.dark,
        fontFamily: constants.font
    },

    price: {
        fontSize: 24,
        color: colors.blue,
        fontWeight: '500',
        marginBottom: 5,
        fontFamily: constants.font
    },

    quote: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        fontFamily: constants.font
    },

    currency: {
        fontSize: 12,
        color: colors.lighttext,
        fontFamily: constants.font
    },

    rate: {
        fontSize: 10,
        color: 'red',
        fontFamily: constants.font
    }


})