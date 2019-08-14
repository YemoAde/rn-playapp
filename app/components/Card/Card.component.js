import React from 'react';
import { View, Text } from 'react-native'
import CardStyle from './Card.style';
import QuoteComponent from './Quote.component';



export default Card = (props) => {

    const { name, total_supply, symbol, slug } = props.item
    return (
        <View style={CardStyle.container}>
            <Text style={CardStyle.bigtext}>{name}</Text>
            <Text style={CardStyle.price}>{` ${symbol} - ${total_supply}`}</Text>
            <Text style={CardStyle.smalltext}> {slug}</Text>
            
            <View>
                <QuoteComponent quote={props.item.quote['USD']} currency={'USD'} />
            </View>
        </View>
    )
}