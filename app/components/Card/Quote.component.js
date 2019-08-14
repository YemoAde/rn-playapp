import React from 'react';
import { View, Text } from 'react-native'
import CardStyle from './Card.style';



export default Quote = ({ quote, currency }) => {

    const { price, volume_24h } = quote

    return (
        <View style={CardStyle.quote}>
            <Text style={CardStyle.currency}>{currency}</Text>
            <Text style={CardStyle.rate}>{price}</Text>
            <Text style={CardStyle.rate}>{volume_24h}</Text>
        </View>
    )
}