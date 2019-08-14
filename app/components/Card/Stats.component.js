import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native'
import CardStyle from './Card.style';

export default Stats = ({ value }) => {

    let icon, color, style;

    if (value > 0) {
        icon = 'md-arrow-up'
        color = 'green'
        style = 'up'
    } else {
        icon = 'md-arrow-down'
        color = 'red'
        style = 'down'
    }

    return (
        <Text style={CardStyle[style]}>
            <Ionicons name={icon} size={12} color={color} /> {" "}
            {value.toFixed(2)}
        </Text>
    )
}
