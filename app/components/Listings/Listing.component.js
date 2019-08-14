import React, { useEffect } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getListings } from './action'
import Card from '../Card/Card.component';
import ListingStyle from './Listing.style';
import { Dropdown } from 'react-native-material-dropdown';


const Listing = props => {

    const { listings, getListings, loading } = props

    useEffect(() => {
        getListings()
    }, [])

    if (loading) {
        return (
            <Text>Loading . . .</Text>
        )
    }

    let data = [{
      value: 'name',
    }, {
      value: 'symbol',
    }, {
      value: 'date_added',
    }, {
      value: 'market_cap_strict',
    }, {
      value: 'price',
    }, {
      value: 'circulating_supply',
    }];
    return (
        <>
        <View style={ListingStyle.container}>
            <Dropdown label='Filter Data' data={data}/>
        </View>
            <ScrollView style={ListingStyle.scrollview} horizontal={true}>
                <>
                    {listings && listings.map(
                        list => (<Card key={list.id} item={list} />
                        ))}
                </>
            </ScrollView>

        </>
    )
}

const mapStateToProps = state => {
    const { error, loading, listings } = state.listings
    return ({
        listings, error, loading
    })
}

export default connect(mapStateToProps, { getListings })(Listing)