import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";

import {
    Container,
    Header,
    Content,
    Text,
    Body,
    Title,
    Card,
    CardItem,
    Left,
    Thumbnail,
    Icon,
    Right
} from "native-base";

import FooterBookingActive from "./footer/FooterBookingActive";

export default class Booking extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <Text>Esto es probando Boking</Text>
                </Content>
                <FooterBookingActive navigation={this.props.navigation} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
