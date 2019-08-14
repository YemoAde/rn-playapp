import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getListings } from './action'
import Card from '../Card/Card.component';
import ListingStyle from './Listing.style';
import { Dropdown } from 'react-native-material-dropdown';
import { List } from 'react-content-loader'

const data = [
    { value: 'name', label: 'Name' },
    { value: 'market_cap', label: 'Market Cap' },
    { value: 'symbol', label: 'Symbol' },
    { value: 'date_added', label: "Date Added" },
    { value: 'market_cap_strict', label: "Market Cap Strict" },
    { value: 'price', label: "Price" },
    { value: 'circulating_supply', label: "Circulating Supply" }
];

const Listing = props => {

    const [filter, setFilter] = useState('market_cap')

    const { listings, getListings, loading, error } = props

    useEffect(() => {
        getListings(filter)
    }, [filter])

    const sort = text => {
        setFilter(text)
    }

    let listview;



    if (error) {

        listview = (
            <View style={ListingStyle.holder}>
                <Text style={ListingStyle.error}>{error}</Text>
            </View>
        )

    } else {
        listview =
            loading ?
                <View style={ListingStyle.holder}>
                    <Text>Loading . . .</Text>
                </View> :
                listings && listings.map(
                    list => (<Card key={list.id} item={list} />
                    ))
    }

    return (
        <>
            <View style={ListingStyle.container}>
                <Dropdown
                    label='Sort By'
                    data={data}
                    onChangeText={sort}
                    value={filter}
                    containerStyle={ListingStyle.dropdowncontainer}
                    pickerStyle={ListingStyle.dropdownpicker}
                />

            </View>

            <ScrollView style={ListingStyle.scrollview} horizontal={false}>
                {listview}
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