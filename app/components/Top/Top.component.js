import React from "react";
import { View, Text } from 'react-native'
import TopStyle from "./Top.style";

export default () => {
	
    return (
        <View style={TopStyle.container}>
            <Text style={TopStyle.headertext}>Listings</Text>
            <Text style={TopStyle.smallertext}>Top list of items in latest</Text>
        	
        </View>
    )
}