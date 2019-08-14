import { StyleSheet } from 'react-native';
import colors from '../../../assets/styles/colors';
import constants from '../../../assets/styles/constants';


export default StyleSheet.create({
    container: {
        fontSize: 20,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white
    },
    scrollview: {
        height: '100%',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: colors.white
    },

    dropdowncontainer: {
        width: '50%',
    },
    holder: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    error: {
        color: colors.red,
        fontFamily: constants.font
    }

})