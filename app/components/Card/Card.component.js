import React from 'react';
import { View, Text } from 'react-native'
import CardStyle from './Card.style';
import Stats from './Stats.component';

export default Card = ({ item }) => {

    const { name, symbol, quote } = item
    const { percent_change_1h, price } = quote['USD']
    return (
        <View style={CardStyle.container}>

            <View style={CardStyle.header}>
                <Text style={CardStyle.headertext}>{name}</Text>
                <Stats value={percent_change_1h} />
            </View>



            <Text style={CardStyle.smalltext}> 1 {symbol} = ${price.toFixed(2)}</Text>

            {/* <View>
                <QuoteComponent quote={props.item.quote['USD']} currency={'USD'} />
            </View> */}
        </View>
    )
}