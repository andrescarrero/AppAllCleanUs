import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { Text } from "native-base";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import Total from "./total";

//const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
//const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
export default class HomeCleaning extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder="Search"
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType="search"
                listViewDisplayed="auto"
                renderDescription={row =>
                    row.description || row.formatted_address || row.name
                }
                //listViewDisplayed='false'
                //renderDescription={row => row.description || row.formatted_address || row.name}
                //renderDescription={row => row.description} // custom description render
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data);
                    console.log(details);
                    //console.log(details.geometry.location);
                    //console.log(details.url);
                }}
                getDefaultValue={() => {
                    return ""; // text input default value
                }}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: "",
                    language: "en", // language of the results
                    types: "geocode" // default: 'geocode'
                }}
                styles={{
                    description: {
                        fontWeight: "bold"
                    },
                    predefinedPlacesDescription: {
                        color: "#1faadb"
                    }
                }}
                currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                currentLocationLabel="Current location"
                nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    // components: 'locality'
                    key: "",
                    language: "en" // language of the results
                }}
                GooglePlacesSearchQuery={
                    {
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    }
                }
                filterReverseGeocodingByTypes={[]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                renderRightButton={() => <Text>Clear</Text>}
                //renderLeftButton={()  => <Image source={require('../../images/services/booking/header/bookingW.png')} />}
                //predefinedPlaces={[homePlace, workPlace]}
            />
        );
    }
}
