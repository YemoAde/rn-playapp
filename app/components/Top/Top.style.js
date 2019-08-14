import { StyleSheet } from 'react-native';
import constants from '../../../assets/styles/constants';
import colors from '../../../assets/styles/colors';


export default StyleSheet.create({
    container: {
        fontSize: 20,
        padding: 30,
        height: '20%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: colors.white,
        backgroundColor: colors.blue,
    },

    headertext: {
        fontFamily: constants.font,
        fontSize: 30,
        fontWeight: '500',
        color: colors.white,
        marginBottom: 5
    },
    
    smallertext: {
        fontFamily: constants.font,
        fontSize: 16,
        fontWeight: '300',
        color: colors.white
    }
})