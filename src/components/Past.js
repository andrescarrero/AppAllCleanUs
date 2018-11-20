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

import FooterPastActive from "./footer/FooterPastActive";

export default class Past extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <Text>Esto es probando PAST</Text>
                </Content>
                <FooterPastActive navigation={this.props.navigation} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
