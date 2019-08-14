import { StyleSheet } from 'react-native'
import colors from '../../../assets/styles/colors';


export default StyleSheet.create({
    container: {
        width: 280,
        padding: 24,
        borderRadius: 4,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        height: '40%',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 20,

        flex: 1,
        flexDirection: 'column',
    },

    bigtext: {
        fontSize: 16,
        color: colors.dark,
        fontWeight: '200',
        marginBottom: 10
    },
    smalltext: {
        fontSize: 10,
        marginTop: 5,
        marginBottom: 10,
        color: colors.green
    },

    price: {
        fontSize: 24,
        color: colors.blue,
        fontWeight: '500',
        marginBottom: 5
    },

    quote: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
    },

    currency: {
        fontSize: 12,
        color: colors.lighttext
    },

    rate: {
        fontSize: 10,
        color: 'red'
    }


})