import { StyleSheet } from 'react-native';
import constants from '../../../assets/styles/constants';


export default StyleSheet.create({
    container: {
        fontSize: 20,
        margin: 40,

    },
    headertext: {
        fontFamily: constants.font,
        fontSize: 30,
        fontWeight: '400',
    },
    smallertext: {
        fontFamily: constants.font,
        fontSize: 16,
        fontWeight: '300',
    }
})