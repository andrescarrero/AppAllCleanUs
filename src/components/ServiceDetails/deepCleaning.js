import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { Container, Header, Content, Text, Body, Title } from "native-base";

import FooterServiceActive from "./../footer/FooterServiceActive";

export default class DeepCleaning extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header style={styles.backgroundHeader}>
                    <Body style={styles.body}>
                        <TouchableOpacity
                            style={styles.press}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <View style={styles.back}>
                                <Image
                                    style={styles.imageHeaderBack}
                                    source={require("../../images/services/cleaning/header/backHeader.png")}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.headerCenter}>
                            <Image
                                style={styles.imageHeaderCleaning}
                                source={require("../../images/services/cleaning/deepCleaningW.png")}
                            />
                            <Title>Deep Cleaning</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.center}>
                        <Image
                            style={styles.item}
                            source={require("../../images/construccion3.gif")}
                        />
                    </View>
                </Content>
                <FooterServiceActive navigation={this.props.navigation} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    backgroundHeader: {
        backgroundColor: "#42addd"
    },
    body: {
        flex: 1,
        flexDirection: "row"
    },
    headerCenter: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 40
    },
    imageHeaderCleaning: {
        height: 36,
        width: 46,
        marginRight: 10
    },
    imageHeaderBack: {
        height: 19,
        width: 14
    },
    back: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
        marginLeft: 5
    },
    press: {
        height: 40,
        width: 40,
        alignItems: "flex-start"
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        alignSelf: "center"
    }
});
