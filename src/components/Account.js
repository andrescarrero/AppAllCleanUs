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

import FooterAccountActive from "./footer/FooterAccountActive";

export default class Account extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                {/* <Content style={styles.content}>
                    <Text>Esto es probando Account</Text>
                </Content> */}
                <View style={styles.center}>
                        <Image style={styles.item}
                            source={require("../images/construccion3.gif")}
                        />
                    </View>
                <FooterAccountActive navigation={this.props.navigation} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        alignSelf: "center"
    },
});
